// @flow
import { isBool } from '../utils'

type name = string
type value = string | number

const ruleProp = (cssProp: name, trueVal: value, falseVal: value): Function =>
  (val: value): { [name]: value } => ({
    [cssProp]: isBool(val) ? (val === true ? trueVal : falseVal) : val
  })

export { ruleProp }
