import { style } from '../core'

/**
 * ```js
 * import { textAlign } from 'pss'
 * ```
 *
 * prop        | css           | type      | value | true
 * :-----------|:--------------|:----------|:------|:-------
 * `textAlign` | `text-align`  | `String`  | ✓     | —
 *
 * Related: {@link text}, {@link ellipsis}, {@link rule}.
 *
 * @param {Object} props
 *
 * @example
 * import { textAlign } from 'pss'
 *
 * const Text = styled.p`
 *   ${textAlign}
 * `
 *
 * @example
 * <Text textAlign='center' /> // text-align: center
 */

export const textAlign = style({
  cssProp: 'textAlign'
})
