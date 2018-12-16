import { createStyles, rule } from '../core'
import { boolValue } from '../values'

/**
 * ```js
 * import { textHelpers } from 'pss'
 * ```
 *
 * prop           | css              | type               | value | true               | false
 * :--------------|:-----------------|:-------------------|:------|:-------------------|:--------
 * `fontSize`     | `font-size`      | `String`, `Number` | ✓     | `1rem`             | `medium`
 * `fontWeight`   | `font-weight`    | `String`           | ✓     | —                  | —
 * `lineHeight`   | `line-height`    | `String`, `Number` | ✓     | `normal`           | —
 * `letterSpacing`| `letter-spacing` | `String`, `Number` | ✓     | `normal`           | —
 * `textAlign`    | `text-align`     | `String`           | ✓     | —                  | —
 * `whiteSpace`   | `white-space`    | `String`           | ✓     | —                  | —
 *
 * Related: {@link fontFamily}, {@link ellipsis}, {@link rule}, {@link boolValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { textHelpers } from 'pss'
 *
 * const Text = styled.p`
 *   ${textHelpers}
 * `
 *
 * @example
 * <Text textAlign='center' /> // text-align: center
 * <Text lineHeight /> // line-height: normal
 */

export const textHelpers = createStyles({
  fontSize: rule('fontSize', boolValue('1rem')),
  fontWeight: rule('fontWeight'),
  lineHeight: rule('lineHeight', boolValue('normal')),
  letterSpacing: rule('letterSpacing', boolValue('normal')),
  textAlign: rule('textAlign'),
  whiteSpace: rule('whiteSpace')
})
