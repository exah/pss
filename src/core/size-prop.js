// @flow

import type {
  CSSProp,
  CSSVal,
  PropStyleFn
} from '../types'

import { getSize, fromTheme, sizeValue, toCssRule, isFn, isStr, curryN } from '../utils'
import { everyMedia } from './every-media'

/**
 * ```js
 * import { sizeProp } from '@exah/prop-styles-system'
 * ```
 *
 * @param cssProp — CSS prop like `width`, `height`, `left`, ...
 * @param sizeValueArgs — For setting defaults for `true` (first) and `false` (second) value
 *
 * @example
 * import styled from 'react-emotion'
 * import { sizeProp, createPropStyles } from '@exah/prop-styles-system'
 *
 * const sizes = createPropStyles({
 *   w: sizeProp('width', '100%', 0),
 *   h: sizeProp('height', '100%', 0),
 *   l: sizeProp('left', 0, 'auto'),
 * })
 *
 * // Add to component
 * const Box = styled.dev(sizes)
 *
 * // Result
 * <Box w /> // .css { width: 100% }
 * <Box wM={(1 / 2)} /> // .css { @media (max-width: 600px) { width: 50% } }
 * <Box h={(3 / 4)} /> // .css { height: 75% }
 * <Box l lM='auto' /> // .css { left: 0; @media (max-width: 600px) { left: auto } }
 */

const sizeProp = (
  cssProp: CSSProp,
  ...sizeValueArgs?: [ CSSVal, CSSVal ]
): PropStyleFn => curryN(2, (propValue, { theme }, propMediaKey) => {
  const cssRule = toCssRule(cssProp)

  if (isStr(propValue)) {
    const customPathValue = fromTheme(propValue, null)(theme)
    if (customPathValue !== null) return cssRule(customPathValue)
  }

  const size = sizeValue(propValue, ...sizeValueArgs)

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
