import { is } from 'ramda'

export const isFn = is(Function)
export const isBool = is(Boolean)
export const isNum = is(Number)
export const isStr = is(String)
export const isArr = is(Array)
export const isObj = is(Object)
export const isPlainObj = (val) => (
  isObj(val) && Object.getPrototypeOf(Object.getPrototypeOf(val)) == null
)
