import { rule } from '../core'
import { spaceValue, sizeValue, boolValue } from '../values'

export const spaceRule = (name) => rule(name, spaceValue(sizeValue()))
export const directionRule = (cssProp) => rule(cssProp, sizeValue(boolValue(0, 'auto')))
export const sizeRule = (cssProp, trueVal = '100%', falseVal = 0) => rule(cssProp, sizeValue(boolValue(trueVal, falseVal)))
