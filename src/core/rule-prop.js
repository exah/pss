import { isBool } from '../utils'

const ruleProp = (cssProp, trueVal, falseVal) => (val) => ({
  [cssProp]: isBool(val) ? (val === true ? trueVal : falseVal) : val
})

export { ruleProp }
