import { rule } from '../core'
import { spaceValue, sizeValue, percentageValue } from '../values'

export const spaceRule = (name) =>
  rule(name, spaceValue(sizeValue()))

export const sizeRule = (name, fallback) =>
  rule(name, sizeValue(percentageValue(fallback)))
