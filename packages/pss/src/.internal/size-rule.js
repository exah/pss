import { rule } from '../core'
import { sizeValue, percentageValue } from '../values'

export const sizeRule = (name, fallback) =>
  rule(name, sizeValue(percentageValue(fallback)))
