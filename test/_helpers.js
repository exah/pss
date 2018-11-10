import { mergeDeepRight } from 'ramda'
import { toArr, flatten } from '@exah/utils'

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 8, 16, 32, 64 ]
  },
  palette: {
    default: {
      bg: '#ffffff',
      fg: '#000000'
    },
    inverted: {
      bg: '#000000',
      fg: '#ffffff'
    }
  }
}

const toStyles = (styles) => flatten(toArr(styles)).reduce(mergeDeepRight, {})

export {
  theme,
  toStyles
}
