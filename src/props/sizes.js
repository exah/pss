import { sizeProp, mediaPropStyles } from '../core'

const sizesProps = mediaPropStyles({
  ht: sizeProp('height'),
  wd: sizeProp('width'),
  maxWd: sizeProp('maxWidth'),
  maxHt: sizeProp('maxHeight'),
  minHt: sizeProp('minHeight'),
  minWd: sizeProp('minWidth')
}, 'sizes')

export { sizesProps }
