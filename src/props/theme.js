import { mediaPropStyles, createThemeProp, createColorProp } from '../core'

export const themeProps = mediaPropStyles({
  tm: createThemeProp('background', 'foreground'),
  fg: createColorProp('color', 'foreground'),
  bg: createColorProp('backgroundColor', 'background'),
  bc: createColorProp('borderColor', 'border')
}, 'theme')
