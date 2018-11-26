import { createPaletteStyle, createColor } from '../core'

const defaultPalette = (style) => (val = true) => style(val)

const theme = defaultPalette(createPaletteStyle('bg', 'fg'))
const color = defaultPalette(createColor('color', 'fg'))
const backgroundColor = defaultPalette(createColor('backgroundColor', 'bg'))
const borderColor = defaultPalette(createColor('borderColor', 'border'))

export { theme, color, backgroundColor, borderColor }
