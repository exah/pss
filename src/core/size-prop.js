// @flow

import type {
  CSSProp,
  CSSVal,
  PropStyleFn
} from '../types'

import { getSize, themePath, sizeValue, toCssRule, isFn, isStr, curryN } from '../utils'
import { everyMedia } from './every-media'

/**
 * ```js
 * import { sizeProp } from '@exah/prop-styles-system'
 * ```
 *
 * @param [cssProp] — Any CSS prop like `width`, `height`, `left`, ...
 * @param [toPx = true] — Add `px` unit to `number` result
 *
 * @example
 * import styled from 'react-emotion'
 * import { sizeProp, createPropStyles } from '@exah/prop-styles-system'
 *
 * const mySizes = createPropStyles({
 *   w: sizeProp('width', '100%', 0, true), // this is default
 *   h: sizeProp('height'), // same as above
 *   l: sizeProp('left', 0, 'auto'),
 *   r: sizeProp('right', 0, 'auto')
 * })
 *
 * const Box = styled.div(mySizes)
 *
 * @example
 * <Box w /> // width: 100%
 * <Box w={false} /> // width: 0
 * <Box wM={(1 / 2)} /> // @media (max-width: 600px) { width: 50% }
 * <Box h='300px' /> // height: 300px
 * <Box l lM='auto' /> // left: 0; @media (max-width: 600px) { left: auto }
 * <Box l={20} r={10} /> // left: 20px; right: 10px
 */

const sizeProp = (
  cssProp: CSSProp,
  trueVal?: CSSVal = '100%',
  falseVal?: CSSVal = 0,
  toPx?: boolean = true
): PropStyleFn => curryN(2, (propValue, { theme }, propMediaKey) => {
  const cssRule = toCssRule(cssProp, toPx)

  if (isStr(propValue)) {
    const customPathValue = themePath(propValue, null)(theme)
    if (customPathValue !== null) return cssRule(customPathValue)
  }

  const size = sizeValue(propValue, trueVal, falseVal)

  if (size !== propValue) {
    return cssRule(size)
  }

  const themeSize = getSize(theme, propValue)

  if (themeSize == null) {
    return cssRule(propValue)
  }

  if (isFn(themeSize)) {
    if (propMediaKey == null) {
      return everyMedia(
        (mediaKey) => cssRule(themeSize(mediaKey, true)),
        { theme }
      )
    }

    const mediaSize = themeSize(propMediaKey)
    return cssRule(mediaSize !== propValue ? mediaSize : propValue)
  }

  return cssRule(themeSize)
})

const sizeStyle = (cssProp: CSSProp, ...sizeValueArgs?: [ CSSVal, CSSVal ]): PropStyleFn =>
  (val = true, ...args) => sizeProp(cssProp, ...sizeValueArgs)(val, ...args)

export {
  sizeStyle,
  sizeProp
}
