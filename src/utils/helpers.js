import { curryN } from 'ramda'
import { isFn, isNum, isArr } from './is'

const ensureStyle = (style) => style == null ? {} : style

const toArr = (val) => isArr(val) ? val : val != null ? [ val ] : []

const toObj = (arr, fn) => toArr(arr).reduce((acc, ...payload) => {
  const result = fn(...payload)
  if (result == null) return acc
  return { ...acc, ...result }
}, {})

const getStyles = (style, val, ...args) => ensureStyle(
  isFn(style)
    ? style(val, ...args)
    : val !== false && val != null ? style : null
)

const wrapSelector = curryN(2, (selector, style) => (props) => ({
  [selector]: ensureStyle(isFn(style) ? style(props) : style)
}))

const wrapIfMedia = (query, style) => {
  if (style == null) return {}
  return query ? { [`@media ${query}`]: style } : style
}

const getSizeValue = (val, trueVal = '100%', falseVal = 0) => (isNum(val)
  ? (val > 1 ? val : `${val * 100}%`)
  : val === true ? trueVal : val === false ? falseVal : val
)

const getSpaceValue = (spaces = [], step) => {
  const size = spaces[Math.abs(step)]
  return size != null ? size * ((step < 0) ? -1 : 1) : step
}

const skipValue = (...styles) => (value, props) => (
  styles.map((s) => s(props))
)

export {
  toArr,
  toObj,
  getStyles,
  wrapSelector,
  wrapIfMedia,
  getSizeValue,
  getSpaceValue,
  skipValue
}
