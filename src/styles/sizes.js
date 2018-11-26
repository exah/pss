import { createSizeMixin } from '../core'

const height = createSizeMixin('height')
const width = createSizeMixin('width')
const maxWidth = createSizeMixin('maxWidth')
const maxHeight = createSizeMixin('maxHeight')
const minHeight = createSizeMixin('minHeight')
const minWidth = createSizeMixin('minWidth')

export {
  height,
  width,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth
}
