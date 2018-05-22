import { createSizeProp, mediaPropStyles } from '../core'

const sizesProps = mediaPropStyles({
  ht: createSizeProp('height'),
  wd: createSizeProp('width'),
  maxWd: createSizeProp('maxWidth'),
  maxHt: createSizeProp('maxHeight'),
  minHt: createSizeProp('minHeight'),
  minWd: createSizeProp('minWidth')
}, 'sizes')

export { sizesProps }
