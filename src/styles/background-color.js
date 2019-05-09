import { style } from '../core'
import { colorValue } from '../values'

/**
 * ```js
 * import { backgroundColor } from 'pss'
 * ```
 * prop              | css                | theme                  | value  | default
 * :-----------------|:-------------------|:-----------------------|:-------|:-------------------------
 * `backgroundColor` | `background-color` | `color`, `palette.*.bg`| ✓      | `theme.palette.default.bg`
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
 *     dark: '#222222',
 *     white: '#ffffff'
 *   },
 *   palette: {
 *     default: { // currently active
 *       bg: '#ffffff',
 *       accent: '#ff0000'
 *     },
 *     inverted: {
 *       bg: '#000000',
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
 * // theme.colors.dark
 * <Box backgroundColor='dark' /> // → background-color: #222222
 *
 * // theme.palette.default.accent
 * <Box backgroundColor='accent' /> // → background-color: #ff0000
 *
 * // Get default value from `theme.palette.default.bg`
 * <Box backgroundColor='auto' /> // → background-color: #ffffff
 * <Box backgroundColor /> // → background-color: #ffffff
 *
 * // theme.palette.inverted.bg
 * <Box backgroundColor='inverted' /> // → background-color: #000000
 *
 * // Any other value
 * <Box backgroundColor="#ffff00" /> // → background-color: #ffff00
 */

export const backgroundColor = style({
  cssProp: 'backgroundColor',
  getValue: colorValue('bg')
})
