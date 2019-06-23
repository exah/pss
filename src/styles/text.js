import { combineStyles } from '../core'
import { fontFamily } from './font-family'
import { fontSize } from './font-size'
import { fontWeight } from './font-weight'
import { letterSpacing } from './letter-spacing'
import { lineHeight } from './line-height'
import { textColor } from './text-color'
import { textAlign } from './text-align'
import { whiteSpace } from './white-space'

/**
 * ```js
 * import { text } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link fontFamily}
 *   - {@link fontSize}
 *   - {@link fontWeight}
 *   - {@link letterSpacing}
 *   - {@link lineHeight}
 *   - {@link textAlign}
 *   - {@link textColor}
 *   - {@link whiteSpace}
 *
 * Related: {@link textStyle}, {@link combineStyles}.
 *
 * @param {Object} props
 *
 * @example
 * import { text } from 'pss'
 *
 * const Text = styled.p`
 *   ${text}
 * `
 *
 * @example
 * <Text textAlign='center' /> // text-align: center
 * <Text lineHeight='normal' /> // line-height: normal
 */

export const text = combineStyles(
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textColor,
  whiteSpace
)
