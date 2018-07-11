import { createPropStyles, themeProp, colorProp } from '../core'

const themePropStyles = createPropStyles({
  tm: themeProp('background', 'foreground'),
  fg: colorProp('color', 'foreground'),
  bg: colorProp('backgroundColor', 'background')
})

export {
  themePropStyles
}
