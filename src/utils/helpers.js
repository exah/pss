import { curryN } from 'ramda'
import { isFn, isNum, isArr, isBool } from './is'

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

const sizeValue = (val, trueVal = '100%') => (isNum(val)
  ? (val > 1 ? val : `${val * 100}%`)
  : val === true ? trueVal : val
)

const getSpaceValue = (spaces = [], step) => {
  const size = spaces[Math.abs(step)]
  return size != null ? size * ((step < 0) ? -1 : 1) : step
}

const sizeRule = (rule, trueVal) => (val, { theme }) => {
  const themeSize = val === true ? theme.sizes[trueVal] : theme.sizes[val]
  return {
    [rule]: themeSize || sizeValue(val, trueVal)
  }
}

const ruleValue = (rule, trueVal, falseVal) => (val) => ({
  [rule]: isBool(val) ? (val === true ? trueVal : falseVal) : val
})

const skipValue = (...styles) => (value, props) => (
  styles.map((s) => s(props))
)

export {
  toArr,
  toObj,
  getStyles,
  wrapSelector,
  wrapIfMedia,
  sizeValue,
  getSpaceValue,
  sizeRule,
  ruleValue,
  skipValue
}
