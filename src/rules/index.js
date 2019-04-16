import { rule } from '../core'
import { spaceValue, sizeValue, boolValue, percentageValue } from '../values'

export const spaceRule = (name) =>
  rule(name, spaceValue(sizeValue()))

export const positionRule = (name, fallback) =>
  rule(name, sizeValue(percentageValue(fallback)))

export const sizeRule = (name, trueVal = '100%', falseVal = 0) =>
  rule(name, sizeValue(percentageValue(boolValue(trueVal, falseVal))))
