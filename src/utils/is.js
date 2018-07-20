// @flow

const isFn = (val: any): %checks => typeof val === 'function'
const isBool = (val: any): %checks => typeof val === 'boolean'
const isNum = (val: any): %checks => typeof val === 'number'
const isStr = (val: any): %checks => typeof val === 'string'
const isArr = (val: any): %checks => Array.isArray(val)

const isHex = (str: string): boolean => /^#/.test(str || '')
const isRgb = (str: string): boolean => /^rgba?/.test(str || '')
const isHsl = (str: string): boolean => /^hsla?/.test(str || '')
const isColor = (str: string): boolean => isHex(str) || isRgb(str) || isHsl(str)

const isEmpty = (val: {}): boolean => {
  if (val != null) {
    for (let key in val) {
      if (val.hasOwnProperty(key)) {
        return false
      }
    }
  }

  return true
}

export {
  isFn,
  isBool,
  isNum,
  isStr,
  isArr,
  isColor,
  isEmpty
}
