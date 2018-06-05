import { propStylesSystem, themeProp, colorProp } from '../core'

export const themeProps = propStylesSystem({
  tm: themeProp('background', 'foreground'),
  fg: colorProp('color', 'foreground'),
  bg: colorProp('backgroundColor', 'background'),
  bc: colorProp('borderColor', 'border')
}, 'theme')
