import { curryN } from 'ramda'
import { isFn, isNum, isArr } from './is'

const toArr = (val) => isArr(val) ? val : val != null ? [ val ] : []

const toObj = (arr, fn) => toArr(arr).reduce((acc, ...payload) => {
  const result = fn(...payload)
  if (result == null) return acc
  return { ...acc, ...result }
}, {})

const ensureStyleObj = (style) => style == null ? {} : style

const getStyles = (style, val, ...args) => ensureStyleObj(
  isFn(style)
    ? style(val, ...args)
    : val !== false && val != null ? style : null
)

const wrapSelector = curryN(2, (selector, style) => (props, mediaKey) => ({
  [selector]: ensureStyleObj(isFn(style) ? style(props, mediaKey) : style)
}))

const wrapIfMedia = (query, style) => {
  if (style == null) return {}
  return query ? { [`@media ${query}`]: style } : style
}

const sizeValue = (val, trueVal = '100%', falseVal = 0) => (isNum(val)
  ? (val > 1 ? val : `${val * 100}%`)
  : val === true ? trueVal : val === false ? falseVal : val
)

const spaceValue = (spaces = [], step) => {
  const size = spaces[Math.abs(step)]
  return size != null ? size * ((step < 0) ? -1 : 1) : step
}

const skipPropValue = (...styles) => (value, props) => (
  styles.map((s) => s(props))
)

export {
  toArr,
  toObj,
  getStyles,
  wrapSelector,
  wrapIfMedia,
  sizeValue,
  spaceValue,
  skipPropValue
}
