import { combine } from '../utils/fns'
import { textStyle } from './text-style'
import { text } from './text'

/**
 * ```js
 * import { typography } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link textStyle}
 *   - {@link text}
 *
 * @example
 * import styled from 'react-emotion'
 * import { typography } from 'pss'
 *
 * const Text = styled('div')(typography)
 *
 * @example
 * <Text textStyle='heading' ellipsis />
 *
 * @example
 * .css {
 *    font-size: 16px;
 *    line-height: 1.2;
 *    font-weight: normal;
 *.   font-family: system-ui;
 * }
 */

const typography = combine(
  textStyle,
  text
)

export {
  typography
}
