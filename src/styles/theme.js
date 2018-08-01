import { themeProp, colorProp } from '../core'

const defaultPalette = (style) => (val = true) => style(val)

const theme = defaultPalette(themeProp('bg', 'fg'))
const color = defaultPalette(colorProp('color', 'fg'))
const backgroundColor = defaultPalette(colorProp('backgroundColor', 'bg'))
const borderColor = defaultPalette(colorProp('borderColor', 'border'))

export { theme, color, backgroundColor, borderColor }
