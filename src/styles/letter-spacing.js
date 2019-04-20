import { style } from '../core'

/**
 * ```js
 * import { letterSpacing } from 'pss'
 * ```
 *
 * prop           | css              | type               | value | true
 * :--------------|:-----------------|:-------------------|:------|:-------
 * `letterSpacing`| `letter-spacing` | `String`, `Number` | ✓     | —
 *
 * Related: {@link text}, {@link ellipsis}, {@link rule}.
 *
 * @param {Object} props
 *
 * @example
 * import { letterSpacing } from 'pss'
 *
 * const Text = styled.p`
 *   ${letterSpacing}
 * `
 *
 * @example
 * <Text letterSpacing='-0.15em' /> // letter-spacing: -0.15em
 */

export const letterSpacing = style({
  cssProp: 'letterSpacing'
})
