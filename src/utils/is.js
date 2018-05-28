import { is } from 'ramda'

const isFn = is(Function)
const isBool = is(Boolean)
const isNum = is(Number)
const isStr = is(String)
const isArr = is(Array)
const isObj = is(Object)

const isHex = (str) => /^#/.test(str || '')
const isRgb = (str) => /^rgba?/.test(str || '')
const isHsl = (str) => /^hsla?/.test(str || '')
const isColor = (str) => isHex(str) || isRgb(str) || isHsl(str)

export {
  isFn,
  isBool,
  isNum,
  isStr,
  isArr,
  isObj,
  isColor
}
