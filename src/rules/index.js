import { rule } from '../core'
import { spaceValue, sizeValue, boolValue, percentageValue } from '../values'

export const spaceRule = (name) =>
  rule(name, spaceValue(sizeValue()))

export const positionRule = (name) =>
  rule(name, sizeValue(percentageValue(boolValue(0, 'auto'))))

export const sizeRule = (name, trueVal = '100%', falseVal = 0) =>
  rule(name, sizeValue(percentageValue(boolValue(trueVal, falseVal))))
