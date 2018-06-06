import { sizeProp, propStylesSystem } from '../core'

const sizesProps = propStylesSystem({
  ht: sizeProp('height'),
  wd: sizeProp('width'),
  maxWd: sizeProp('maxWidth'),
  maxHt: sizeProp('maxHeight'),
  minHt: sizeProp('minHeight'),
  minWd: sizeProp('minWidth')
})

export { sizesProps }
