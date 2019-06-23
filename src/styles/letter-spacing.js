import { style } from '../core'

/**
 * ```js
 * import { letterSpacing } from 'pss'
 * ```
 *
 * prop           | css              | theme  | value | default
 * :--------------|:-----------------|:-------|:------|:-------
 * `letterSpacing`| `letter-spacing` | —      | ✓     | —
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
