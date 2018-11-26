// @flow

import type { StyleValue, PropStyle } from '../types'
import { isStr, curryN } from '@exah/utils'
import { getSize, themePath } from '../getters'
import { sizeValue, toCssRule } from '../utils'
import { everyMediaValue } from './every-media'

/**
 * ```js
 * import { createSize } from 'pss'
 * ```
 *
 * @param [cssProp] — Any CSS prop like `width`, `height`, `left`, ...
 * @param [toPx = true] — Add `px` unit to `number` result
 *
 * @example
 * import styled from 'react-emotion'
 * import pss, { createSize } from 'pss'
 *
 * const mySizes = pss({
 *   w: createSize('width', '100%', 0, true), // this is default
 *   h: createSize('height'), // same as above
 *   l: createSize('left', 0, 'auto'),
 *   r: createSize('right', 0, 'auto')
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

const createSize = (
  cssProp: string,
  trueVal?: StyleValue = '100%',
  falseVal?: StyleValue = 0,
  toPx?: boolean = true
): PropStyle => curryN(2, (input, props, mediaKey, isRawValue) => {
  const cssRule = toCssRule(cssProp, toPx)

  if (isRawValue === true) {
    return cssRule(input)
  }

  if (isStr(input)) {
    const customPathValue = themePath(input, null)(props)
    if (customPathValue !== null) return cssRule(customPathValue)
  }

  const themeSize = getSize(
    input,
    sizeValue(input, trueVal, falseVal),
    mediaKey
  )

  return everyMediaValue(themeSize, cssRule)(props)
})

const createSizeMixin = (cssProp: string, ...sizeValueArgs?: [ StyleValue, StyleValue ]): PropStyle =>
  (val = true, ...args) => createSize(cssProp, ...sizeValueArgs)(val, ...args)

export {
  createSizeMixin,
  createSize
}
