import { isStr, path, identity, compose } from '@exah/utils'
import { SIZES_KEY } from '../constants'
import { px } from '../utils'
import { getThemeValue } from '../getters'
import { createPercentageValue } from './percentage-value'

const scaleGetter = (scale, transformValue = identity) =>
  (input, fallback) => transformValue(path(input, fallback)(scale))

export function createSizeValue ({
  transformValue = identity,
  themeKey = SIZES_KEY,
  scale = null,
  getter = scale
    ? scaleGetter(scale, transformValue)
    : getThemeValue(themeKey, transformValue)
} = {}) {
  return (defaultValue) => (
    input,
    props,
    mediaKey
  ) => {
    if (isStr(input)) {
      return getter(input, input, mediaKey)(props)
    }

    return defaultValue
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
 * Related: {@link sizes}, {@link rule}, {@link percentageValue}, {@link spaceValue}.
 *
 * @param {Function} [transformValue = boolValue('100%', 0)]
 * @return {Function} - that must be used in {@link rule}
 *
 * @example
 * import pss, { rule, sizeValue, boolValue } from 'pss'
 *
 * const sizes = pss({
 *   h: rule('height', sizeValue())
 *   w: rule('width', sizeValue()),
 *   l: rule('left', sizeValue(boolValue(0, 'auto'))),
 *   r: rule('right', sizeValue(boolValue(0, 'auto')))
 * })
 *
 * const Box = styled.div`
 *   ${sizes}
 * `
 *
 * @example
 * <Box w={1} /> // → width: 100%
 * <Box w={0} /> // → width: 0
 * <Box w={{ sm: (1 / 2) }} /> // → @media (max-width: 600px) { width: 50% }
 * <Box h='300px' /> // → height: 300px
 * <Box l={{ all: 0, sm: 'auto' }} /> // → left: 0; @media (max-width: 600px) { left: auto }
 * <Box l={20} r={10} /> // → left: 20px; right: 10px
 * <Box l r /> // → left: 0; right: 0
 */

export const sizeValue = compose(
  createSizeValue({ transformValue: px }),
  createPercentageValue({ transformValue: px }) // COMPAT
)
