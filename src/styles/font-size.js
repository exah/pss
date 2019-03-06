import { style } from '../core'

/**
 * ```js
 * import { fontSize } from 'pss'
 * ```
 *
 * prop           | css              | type               | value | true   | false
 * :--------------|:-----------------|:-------------------|:------|:-------|:--------
 * `fontSize`     | `font-size`      | `String`, `Number` | ✓     | —      | —
 *
 * Related: {@link text}, {@link ellipsis}, {@link rule}, {@link boolValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { fontSize } from 'pss'
 *
 * const Text = styled.p`
 *   ${fontSize}
 * `
 *
 * @example
 * <Text fontSize='1rem' /> // font-size: 1rem
 */

export const fontSize = style({
  cssProp: 'fontSize'
})
