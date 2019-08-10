import { rule } from '../core'
import { spaceValue, sizeValue } from '../values'

export const spaceRule = (name) =>
  rule(name, spaceValue(sizeValue()))
