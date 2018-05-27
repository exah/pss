import { flatten, mergeDeepRight } from 'ramda'
import { toArr } from '../src/utils'

const toStyles = (styles) => flatten(toArr(styles)).reduce(mergeDeepRight, {})

export {
  toStyles
}
