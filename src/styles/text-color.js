import { style } from '../core'
import { colorValue } from '../values'

/**
 * ```js
 * import { textColor } from 'pss'
 * ```
 * prop     | css    | theme                   | value | default
 * :-------|:--------|:------------------------|:------|:---------------
 * `color` | `color` | `color`, `palette.*.fg` | ✓     | `theme.palette.default.fg`
 *
 * Related: {@link backgroundColor}, {@link colors}, {@link style}, {@link colorValue}.
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
 *       fg: '#000000',
 *       accent: '#ff0000'
 *     },
 *     inverted: {
 *       fg: '#ffffff',
 *       accent: '#ff0000'
 *     }
 *   }
 * }
 * ```
 *
 * @param {Object} props
 *
 * @example
 * import { textColor } from 'pss'
 *
 * const Box = styled.div`
 *   ${textColor}
 * `
 *
 * @example
 * // theme.colors.black
 * <Box color='black' /> // color: #222222
 *
 * // theme.palette.default.accent
 * <Box color='accent' /> // color: #ff0000
 *
 * // Get default value from `theme.palette.default.fg`
 * <Box color='auto' /> // color: #000000
 * <Box color /> // color: #000000
 *
 * // Valid color value
 * <Box color="#ffff00" /> // background-color: #ffff00
 */

export const textColor = style({
  cssProp: 'color',
  getValue: colorValue('fg')
})
