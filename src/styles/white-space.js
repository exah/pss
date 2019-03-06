import { style } from '../core'

/**
 * ```js
 * import { whiteSpace } from 'pss'
 * ```
 *
 * prop        | css           | type      | value | true   | false
 * :-----------|:--------------|:----------|:------|:-------|:--------
 * `whiteSpace` | `white-space`  | `String`  | ✓     | —      | —
 *
 * Related: {@link text}, {@link ellipsis}, {@link rule}, {@link boolValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { whiteSpace } from 'pss'
 *
 * const Text = styled.p`
 *   ${whiteSpace}
 * `
 *
 * @example
 * <Text whiteSpace='nowrap' /> // white-space: nowrap
 */

export const whiteSpace = style({
  cssProp: 'whiteSpace'
})
