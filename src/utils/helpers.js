import { isFn, isNum, isStr, isPlainObj, toObj, curryN } from '@exah/utils'

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

const getNumber = (str) => parseFloat(str, 10)
const getUnit = (str) => String(str)
  .replace(/([\d.]+)(\D+)?$/, '$2')
  .trim()

const splitUnit = (str) => [ getNumber(str), getUnit(str) ]

const spaceValue = (val, spaces) => {
  const size = spaces[Math.abs(val)]
  const coeficent = ((val < 0) ? -1 : 1)

  if (size === undefined) {
    return null
  } else if (isStr(size)) {
    const [ number, unit ] = splitUnit(size)
    return `${Number(number) * coeficent}${unit}`
  }

  return size * coeficent
}

const skipPropValue = (...styles) => (value, ...rest) => (
  styles.map((s) => s(...rest))
)

const hasMediaKeys = (mediaKeys, value = {}) => (
  isPlainObj(value) &&
  Object.keys(value).some((key) => mediaKeys.includes(key))
)

export {
  toCssRule,
  wrap,
  wrapIfMedia,
  handlePropStyle,
  sizeValue,
  spaceValue,
  skipPropValue,
  hasMediaKeys
}
