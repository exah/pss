import { isFn, isNum, isStr, isArr } from './is'
import { curryN, identity } from './fns'

const toArr = (val) => isArr(val) ? val : val != null ? [ val ] : []

const toObj = (arr, fn = identity) => toArr(arr).reduce((acc, value) => ({
  ...acc,
  ...fn(value)
}), {})

const mapObj = curryN(2, (obj, fn) => Object.entries(obj).reduce((acc, entry, index) => {
  const [ nextKey, nextVal ] = fn(entry, index, obj)
  return {
    ...acc,
    [nextKey]: nextVal
  }
}, {}))

const toCssRule = (cssProps, toPx) => (val) => val != null
  ? toObj(cssProps, (name) => {
    const valWithUnit = toPx === true && (val > 0 || val < 0) ? `${val}px` : val
    return {
      [name]: valWithUnit
    }
  })
  : null

const wrap = curryN(2, (name, style) => {
  const wrapper = (obj) => obj != null ? (name ? { [name]: obj } : obj) : null
  return isFn(style)
    ? (...args) => wrapper(style(...args))
    : wrapper(style)
})

const handlePropStyle = (style, value, props, mediaKey, isRawValue) => isFn(style)
  ? style(value, props, mediaKey, isRawValue)
  : value === true ? style : null

const wrapIfMedia = (query, style) => wrap(
  query ? `@media ${query}` : null,
  style
)

const sizeValue = (val, trueVal = '100%', falseVal = 0) => (isNum(val)
  ? (val <= 0 || val > 1 ? val : `${val * 100}%`)
  : val === true ? trueVal : val === false ? falseVal : val
)

const spaceValue = (val, spaces) => {
  const size = spaces[Math.abs(val)]

  if (size === undefined) {
    return null
  }

  return size * ((val < 0) ? -1 : 1)
}

const skipPropValue = (...styles) => (value, ...rest) => (
  styles.map((s) => s(...rest))
)

const path = curryN(3, (pathsOpt, fallback, src) => {
  const paths = isStr(pathsOpt) ? pathsOpt.split('.') : toArr(pathsOpt)
  let val = src
  let idx = 0

  while (idx < paths.length) {
    val = val[paths[idx]]
    idx += 1

    if (val == null) {
      return fallback
    }
  }

  return val === src ? fallback : val
})

export {
  toArr,
  toObj,
  mapObj,
  toCssRule,
  wrap,
  path,
  wrapIfMedia,
  handlePropStyle,
  sizeValue,
  spaceValue,
  skipPropValue
}
