import { curryN } from 'ramda'
import { isFn, isNum, isArr, isBool } from './is'

const ensureStyle = (style) => style == null ? {} : style

export const toArr = (val) => isArr(val) ? val : val != null ? [ val ] : []

export const getStyles = (style, val, ...args) => ensureStyle(
  isFn(style)
    ? style(val, ...args)
    : val !== false && val != null ? style : null
)

export const wrapSelector = curryN(2, (selector, style) => (props) => ({
  [selector]: ensureStyle(isFn(style) ? style(props) : style)
}))

export const wrapIfMedia = (query, style) => {
  if (style == null) return {}
  return query ? { [`@media ${query}`]: style } : style
}

export const sizeValue = (val, trueVal = '100%') => (isNum(val)
  ? (val > 1 ? val : `${val * 100}%`)
  : val === true ? trueVal : val
)

export const getSpaceValue = (spaces = [], step) => {
  const size = spaces[Math.abs(step)]
  return size != null ? size * ((step < 0) ? -1 : 1) : step
}

export const sizeRule = (rule, trueVal) => (val, { theme }) => {
  const themeSize = val === true ? theme.sizes[trueVal] : theme.sizes[val]
  return {
    [rule]: themeSize || sizeValue(val, trueVal)
  }
}

export const ruleValue = (rule, trueVal, falseVal) => (val) => ({
  [rule]: isBool(val) ? (val === true ? trueVal : falseVal) : val
})

export const skipValue = (...styles) => (value, props) => (
  styles.map((s) => s(props))
)
