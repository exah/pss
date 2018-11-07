// @flow
const isHex = (str: string): boolean => /^#/.test(str || '')
const isRgb = (str: string): boolean => /^rgba?/.test(str || '')
const isHsl = (str: string): boolean => /^hsla?/.test(str || '')
const isColor = (str: string): boolean => isHex(str) || isRgb(str) || isHsl(str)

export {
  isColor
}
