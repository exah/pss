import { style } from '../core'
import { colorValue } from '../values'

/**
 * ```js
 * import { backgroundColor } from 'pss'
 * ```
 * prop              | css                | type                | value | theme              | true
 * :-----------------|:-------------------|:--------------------|:------|:-------------------|:---------------
 * `backgroundColor` | `backgroundColor`  | `String`, `Boolean` | ✓     | `color`, `palette` | `palette.*.bg`
 *
 * Related: {@link textColor}, {@link colors}, {@link style}, {@link colorValue}.
 *
 * Examples use this `theme`:
 *
 * ```js
 * const theme = {
 *   default: {
 *     palette: 'default' // this can be changed in runtime and default to `default`
 *   },
 *   color: {
 *     red: '#ff0000',
 *     black: '#222222',
 *     white: '#ffffff'
 *   },
 *   palette: {
 *     default: { // currently active
 *       bg: '#000000',
 *       accent: '#ff0000'
 *     },
 *     inverted: {
 *       bg: '#ffffff',
 *       accent: '#ff0000'
 *     }
 *   }
 * }
 * ```
 *
 * @param {Object} props
 *
 * @example
 * import { backgroundColor } from 'pss'
 *
 * const Box = styled.div`
 *   ${backgroundColor}
 * `
 *
 * @example
 * // theme.colors.black
 * <Box color='black' /> // color: #222222
 *
 * // theme.palette.default.accent
 * <Box color='accent' /> // color: #ff0000
 *
 * // theme.palette.default.bg
 * <Box color /> // color: #000000
 *
 * // Valid color value
 * <Box color="#ffff00" /> // background-color: #ffff00
 */

export const backgroundColor = style({
  cssProp: 'backgroundColor',
  getValue: colorValue('bg')
})
