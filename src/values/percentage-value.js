import { isNum, identity } from '@exah/utils'
import { px } from '../utils'

const percentage = (n) => (n > 0 && n <= 1) ? `${n * 100}%` : n

export function createPercentageValue ({ transformValue = identity } = {}) {
  return (defaultValue) => (input) =>
    isNum(input) ? transformValue(percentage(input)) : defaultValue
}

/**
 * ```js
 * import { percentageValue } from 'pss'
 * ```
 *
 * Related: {@link sizes}, {@link rule}, {@link sizeValue}.
 *
 * @return {Function} - that must be used in {@link rule}
 *
 * @example
 * import pss, { rule, percentageValue } from 'pss'
 *
 * const sizes = pss({
 *   w: rule('width', percentageValue())
 * })
 *
 * const Box = styled.div`
 *   ${sizes}
 * `
 *
 * @example
 * <Box w={1} /> // → width: 100%
 * <Box w={1 / 2} /> // → width: 50%
 * <Box w={0} /> // → width: 0
 * <Box w={100} /> // → width: 100px
 */

export const percentageValue = createPercentageValue({
  transformValue: px
})
