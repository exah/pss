import { combine } from '../utils'
import { fontFamily } from './font-family'
import { textStyle } from './text-style'
import { textHelpers } from './text-helpers'
import { ellipsis } from './ellipsis'

/**
 * ```js
 * import { typography } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link textStyle}
 *   - {@link textHelpers}
 *   - {@link fontFamily}
 *   - {@link ellipsis}
 *
 * @example
 * import { typography } from 'pss'
 *
 * const Text = styled.p`
 *   ${typography}
 * `
 *
 * @example
 * <Text textStyle='heading' ellipsis />
 *
 * @example
 * .css {
 *    font-size: 16px;
 *    line-height: 1.2;
 *    font-weight: normal;
 *    font-family: system-ui;
 *    white-space: nowrap;
 *    overflow: hidden;
 *    text-overflow: ellipsis;
 * }
 */

const typography = combine(
  textHelpers,
  textStyle,
  fontFamily,
  ellipsis
)

export {
  typography
}
