const isFn = (val) => typeof val === 'function'
const isBool = (val) => typeof val === 'boolean'
const isNum = (val) => typeof val === 'number'
const isStr = (val) => typeof val === 'string'
const isArr = (val) => Array.isArray(val)
const isObj = (val) => typeof val === 'object' && !isArr(val)

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
