import { createStyles, rule } from '../core'

/**
 * ```js
 * import { text } from 'pss'
 * ```
 *
 * prop           | css              | type               | value | true   | false
 * :--------------|:-----------------|:-------------------|:------|:-------|:--------
 * `fontFamily`   | `font-family`    | `String`           | ✓     | —      | —
 * `fontSize`     | `font-size`      | `String`, `Number` | ✓     | —      | —
 * `fontWeight`   | `font-weight`    | `String`           | ✓     | —      | —
 * `lineHeight`   | `line-height`    | `String`, `Number` | ✓     | —      | —
 * `letterSpacing`| `letter-spacing` | `String`, `Number` | ✓     | —      | —
 * `textAlign`    | `text-align`     | `String`           | ✓     | —      | —
 * `whiteSpace`   | `white-space`    | `String`           | ✓     | —      | —
 *
 * Related: {@link fontVariant}, {@link ellipsis}, {@link rule}, {@link boolValue}.
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

export const text = createStyles({
  fontFamily: rule('fontFamily'),
  fontSize: rule('fontSize'),
  fontWeight: rule('fontWeight'),
  lineHeight: rule('lineHeight'),
  letterSpacing: rule('letterSpacing'),
  textAlign: rule('textAlign'),
  whiteSpace: rule('whiteSpace')
})
