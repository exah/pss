import { style } from '../core'

/**
 * ```js
 * import { whiteSpace } from 'pss'
 * ```
 *
 * prop         | css            | theme | value | default
 * :------------|:---------------|:------|:------|:-------
 * `whiteSpace` | `white-space`  | —     | ✓     | —
 *
 * Related: {@link text}, {@link ellipsis}, {@link style}.
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
