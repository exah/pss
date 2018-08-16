import { createPaletteProp, createColorProp } from '../core'

const defaultPalette = (style) => (val = true) => style(val)

const theme = defaultPalette(createPaletteProp('bg', 'fg'))
const color = defaultPalette(createColorProp('color', 'fg'))
const backgroundColor = defaultPalette(createColorProp('backgroundColor', 'bg'))
const borderColor = defaultPalette(createColorProp('borderColor', 'border'))

export { theme, color, backgroundColor, borderColor }
