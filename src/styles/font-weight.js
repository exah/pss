import { style } from '../core'

/**
 * ```js
 * import { fontWeight } from 'pss'
 * ```
 *
 * prop           | css              | type      | value | true
 * :--------------|:-----------------|:----------|:------|:-------
 * `fontWeight`   | `font-weight`    | `String`  | ✓     | —
 *
 * Related: {@link text}, {@link ellipsis}, {@link rule}
 *
 * @param {Object} props
 *
 * @example
 * import { fontWeight } from 'pss'
 *
 * const Text = styled.p`
 *   ${fontWeight}
 * `
 *
 * @example
 * <Text fontWeight='bold' /> // font-weight: bold
 */

export const fontWeight = style({
  cssProp: 'fontWeight'
})
