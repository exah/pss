import { themeProp, colorProp } from '../core'

const defaultPalette = (style) => (val = true) => style(val)

const theme = defaultPalette(themeProp('background', 'foreground'))
const color = defaultPalette(colorProp('color', 'foreground'))
const backgroundColor = defaultPalette(colorProp('backgroundColor', 'background'))
const borderColor = defaultPalette(colorProp('borderColor', 'border'))

export { theme, color, backgroundColor, borderColor }
