import { rule } from '../core'
import { spaceValue, sizeValue, boolValue, percentageValue } from '../values'

export const spaceRule = (name) => rule(name, spaceValue(sizeValue()))
export const directionRule = (cssProp) => rule(cssProp, sizeValue(percentageValue(boolValue(0, 'auto'))))
export const sizeRule = (cssProp, trueVal = '100%', falseVal = 0) => rule(cssProp, sizeValue(percentageValue(boolValue(trueVal, falseVal))))
