import { createPropStyles, themeProp, colorProp } from '../core'

/**
 * Alias **`colors`**
 *
 * ```js
 * import { colors } from 'pss'
 * ```
 *
 * Ready to use colors prop styles created with {@link colorProp} and {@link themeProp}.
 *
 * - `fg` → `color`
 * - `bg` → `background-color`
 * - `tm` → `color`, `background-color`
 *
 * @example
 * import styled from 'react-emotion'
 * import { colors } from 'pss'
 *
 * const Box = styled.div(colors)
 *
 * @example
 * // theme.palette.default.bg
 * <Box bg /> // background-color: #ffffff
 *
 * // theme.colors.black
 * <Box fg='black' /> // color: #222222
 *
 * // theme.palette.default.accent
 * <Box fg='accent' /> // color: #ff0000
 *
 * // theme.palette.default.bg, theme.palette.default.fg
 * <Box tm /> // background-color: #ffffff; color: #222222
 *
 * // theme.palette.inverted.bg, theme.palette.inverted.fg
 * <Box tm='inverted' /> // background-color: #222222; color: #fffffff
 *
 * // Raw color value
 * <Box bg="#ffff00" /> // background-color: #ffff00
 */

const colorsPropStyles = createPropStyles({
  tm: themeProp('bg', 'fg'),
  fg: colorProp('color', 'fg'),
  bg: colorProp('backgroundColor', 'bg')
})

export {
  colorsPropStyles
}
