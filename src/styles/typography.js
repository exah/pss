import { combineStyles } from '../core'
import { text } from './text'
import { fontFamily } from './font-family'
import { ellipsis } from './ellipsis'

/**
 * ```js
 * import { typography } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link text}
 *   - {@link fontFamily}
 *   - {@link ellipsis}
 *
 * Related: {@link combineStyles}, {@link textStyle}.
 *
 * @param {Object} props
 *
 * @example
 * import { typography } from 'pss'
 *
 * const Text = styled.p`
 *   ${typography}
 * `
 *
 * @example
 * <Text fontSize={24} lineHeight={1.2} letterSpacing='0.12em' ellipsis />
 *
 * @example
 * .css {
 *    font-size: 14px;
 *    line-height: 1.2;
 *    letterSpacing: 0.12em;
 *    white-space: nowrap;
 *    overflow: hidden;
 *    text-overflow: ellipsis;
 * }
 */

const typography = combineStyles(
  text,
  fontFamily,
  ellipsis
)

export {
  typography
}
