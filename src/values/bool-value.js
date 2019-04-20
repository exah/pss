import { isBool } from '@exah/utils'

/**
 * ```js
 * import { boolValue } from 'pss'
 * ```
 *
 * Get value for rule based boolean condition, other values passed without modification.
 * Must be used with {@link rule}.
 *
 * @example
 * import pss, { rule, boolValue } from 'pss'
 *
 * const Box = styled.div(pss({
 *   opacity: rule('opacity', boolValue(1, 0))
 * }))
 *
 * @example
 * <Box opacity /> // → opacity: 1
 * <Box opacity={false} /> // → opacity: 0
 * <Box opacity={0.5} /> // → opacity: 0.5
 */

export const boolValue = (trueValue, falseValue, defaultValue) => (input) =>
  isBool(input) ? (input === true ? trueValue : falseValue) : defaultValue
