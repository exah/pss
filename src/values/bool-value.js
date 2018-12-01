// @flow

import type { StyleValue, PropStyleValue } from '../types'
import { isBool } from '@exah/utils'

const boolValue = (trueVal: StyleValue, falseVal: StyleValue) => (
  input: PropStyleValue
) => isBool(input) ? (input === true ? trueVal : falseVal) : input

export {
  boolValue
}
