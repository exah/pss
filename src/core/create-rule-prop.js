import { isBool } from '../utils'

const createRuleProp = (cssProp, trueVal, falseVal) => (val) => ({
  [cssProp]: isBool(val) ? (val === true ? trueVal : falseVal) : val
})

export { createRuleProp }
