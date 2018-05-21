import { is } from 'ramda'

const isFn = is(Function)
const isBool = is(Boolean)
const isNum = is(Number)
const isStr = is(String)
const isArr = is(Array)
const isObj = is(Object)
const isPlainObj = (val) => (
  isObj(val) && Object.getPrototypeOf(Object.getPrototypeOf(val)) == null
)

export {
  isFn,
  isBool,
  isNum,
  isStr,
  isArr,
  isObj,
  isPlainObj
}
