import { createPropStyles, themeProp, colorProp } from '../core'

export const themeProps = createPropStyles({
  tm: themeProp('background', 'foreground'),
  fg: colorProp('color', 'foreground'),
  bg: colorProp('backgroundColor', 'background')
})
