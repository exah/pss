import { isNum, isFn } from '@exah/utils'
import { SIZES_KEY } from '../constants'
import { getThemeValue } from '../getters'
import { percentage, px } from '../utils'
import { boolValue } from './bool-value'

export function createSizeValue ({
  transformValue = px,
  themeKey = SIZES_KEY,
  getter = getThemeValue(themeKey, transformValue)
} = {}) {
  return (defaultValue = boolValue('100%', 0)) => (
    input,
    props,
    mediaKey
  ) => {
    const value = isNum(input)
      ? percentage(input)
      : isFn(defaultValue)
        ? defaultValue(input, props, mediaKey)
        : defaultValue

    return getter(input, value, mediaKey)(props)
  }
}

/**
 * ```js
 * import { sizeValue } from 'pss'
 * ```
 *
 * Sizes system for any css prop. Default behaviour described in {@link sizes}.
 * Must be used with {@link rule}.
 *
 * Related: {@link sizes}, {@link rule}, {@link spaceValue}.
 *
 * @param {Function} [transformValue = boolValue('100%', 0)]
 * @return {Function} - that must be used in {@link rule}
 *
 * @example
 * import pss, { rule, sizeValue, boolValue } from 'pss'
 *
 * const sizes = pss({
 *   h: rule('height', sizeValue())
 *   w: rule('width', sizeValue(boolValue('100%', 0))), // this is default - same as above
 *   l: rule('left', sizeValue(boolValue(0, 'auto'))),
 *   r: rule('right', sizeValue(boolValue(0, 'auto')))
 * })
 *
 * const Box = styled.div`
 *   ${sizes}
 * `
 *
 * @example
 * <Box w /> // → width: 100%
 * <Box w={false} /> // → width: 0
 * <Box w={{ sm: (1 / 2) }} /> // → @media (max-width: 600px) { width: 50% }
 * <Box h='300px' /> // → height: 300px
 * <Box l={{ all: 0, sm: 'auto' }} /> // → left: 0; @media (max-width: 600px) { left: auto }
 * <Box l={20} r={10} /> // → left: 20px; right: 10px
 * <Box l r /> // → left: 0; right: 0
 */

export const sizeValue = createSizeValue()
