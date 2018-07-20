// @flow

import type {
  CSSProp,
  CSSVal,
  PropStyleFn,
  PropStyleVal,
  StyleObj
} from '../types'

import { isBool } from '../utils/is'

const ruleProp = (
  cssProp: CSSProp,
  trueVal: CSSVal,
  falseVal: CSSVal
): PropStyleFn => (val: PropStyleVal | CSSVal): StyleObj => ({
  [cssProp]: isBool(val) ? (val === true ? trueVal : falseVal) : val
})

export { ruleProp }
