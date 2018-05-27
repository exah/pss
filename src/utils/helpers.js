import { curryN } from 'ramda'
import { isFn, isNum, isArr } from './is'

const toArr = (val) => isArr(val) ? val : val != null ? [ val ] : []

const toObj = (arr, fn) => toArr(arr).reduce((acc, ...payload) => {
  const result = fn(...payload)
  if (result == null) return acc
  return { ...acc, ...result }
}, {})

const toCssRule = (cssProps, val) => val != null
  ? toObj(cssProps, (name) => ({ [name]: val }))
  : null

const getStyles = (style, val, ...args) =>
  isFn(style)
    ? style(val, ...args)
    : val !== false && val != null ? style : null

const wrapSelector = curryN(2, (name, style) => {
  const wrapper = (obj) => obj ? (name ? { [name]: obj } : obj) : {}
  return isFn(style)
    ? (...args) => wrapper(style(...args))
    : wrapper(style)
})

const wrapIfMedia = (query, style) => wrapSelector(
  query ? `@media ${query}` : null,
  style
)

const sizeValue = (val, trueVal = '100%', falseVal = 0) => (isNum(val)
  ? (val > 1 ? val : `${val * 100}%`)
  : val === true ? trueVal : val === false ? falseVal : val
)

const spaceValue = (spaces = [], step) => {
  const size = spaces[Math.abs(step)]
  return size != null ? size * ((step < 0) ? -1 : 1) : step
}

const skipPropValue = (...styles) => (value, ...rest) => (
  styles.map((s) => s(...rest))
)

export {
  toArr,
  toObj,
  toCssRule,
  getStyles,
  wrapSelector,
  wrapIfMedia,
  sizeValue,
  spaceValue,
  skipPropValue
}
