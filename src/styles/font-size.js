import { style } from '../core'
import { px } from '../utils'

/**
 * ```js
 * import { fontSize } from 'pss'
 * ```
 *
 * prop       | css         | type               | theme      | value | true   | false
 * :----------|:------------|:------------------ |:-----------|:------|:-------|:--------
 * `fontSize` | `font-size` | `String`, `Number` | `fontSize` | ✓     | —      | —
 *
 * Related: {@link text}, {@link ellipsis}, {@link rule}, {@link boolValue}.
 *
 * ```js
 * const theme = {
 *   default: {
 *     fontSize: 'root'
 *   },
 *   media: {
 *     sm: '(max-width: 600px)'
 *   },
 *   fontSize: {
 *     root: 16,
 *     heading: 22,
 *     caption: {
 *       all: 12,
 *       sm: 14
 *     }
 *   }
 * }
 * ```
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
 * <Text fontSize='1rem' /> // → font-size: 1rem
 * <Text fontSize='root' /> // → theme.fontSize.root // → font-size: 1rem
 * <Text fontSize='heading' /> // → theme.fontSize.heading // → font-size: 1.5rem
 */

export const fontSize = style({
  cssProp: 'fontSize',
  themeKey: 'fontSize',
  transformValue: px
})
