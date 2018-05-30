// @flow
import { isBool } from '../utils'

import type {
  CSSProp,
  CSSValue,
  PropStyle,
  Style
} from '../types'

const ruleProp = (
  cssProp: CSSProp,
  trueVal: CSSValue,
  falseVal: CSSValue
): PropStyle => (val: CSSValue): Style => ({
  [cssProp]: isBool(val) ? (val === true ? trueVal : falseVal) : val
})

export { ruleProp }
