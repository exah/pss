import { isFn, isNum, isStr, isArr } from './is'
import { curryN, identity } from './fns'

const toArr = (val) => isArr(val) ? val : val != null ? [ val ] : []

const toObj = (arr, fn = identity) => toArr(arr).reduce((acc, ...payload) => ({
  ...acc,
  ...fn(...payload)
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

const handlePropStyle = (style, value, ...args) => isFn(style)
  ? style(value, ...args)
  : value === true ? style : null

/**
 * Alias **`ps`**
 *
 * ```js
 * import { ps } from '@exah/prop-styles-system'
 * ```
 *
 * Wrap result of prop style in custom CSS selector.
 *
 * @param {string} [name] — CSS selector, like `&:first-child`, `& + &`
 * @param {PropStyleVal} [value] — prop value
 *
 * @example
 * import styled from 'react-emotion'
 * import { space } from '@exah/prop-styles-system'
 *
 * const Box = styled.div(space)
 *
 * @example
 * import { ps } from '@exah/prop-styles-system'
 *
 * <Box mgt={ps('& + &', 1)} />
 *
 * @example
 * .css + .css { margin-top: 10px }
 * @media (max-width: 600px) { .css + .css { margin-top: 8px } }
 */

const propSelector = curryN(2, (name, value) => (props, mediaKey, style) => ({
  [name]: handlePropStyle(style, value, props, mediaKey)
}))

const themeSelector = (fn) => (props, mediaKey, style = identity) => handlePropStyle(
  style,
  fn(props.theme),
  props,
  mediaKey
)

/**
 * Alias **`cs`**
 *
 * ```js
 * import { cs } from '@exah/prop-styles-system'
 * ```
 *
 * Combine any number of {@link propSelector}s.
 *
 * @example
 * import styled from 'react-emotion'
 * import { space } from '@exah/prop-styles-system'
 *
 * const Box = styled.div(space)
 *
 * @example
 * import { cs, ps } from '@exah/prop-styles-system'
 *
 * <Box mgt={cs(2, ps('& + &', 1), ps('&:nth-of-type(2)', 0))} />
 *
 * @example
 * .css { margin-top: 20px }
 * .css + .css { margin-top: 10px }
 * .css:nth-of-type(2) { margin-top: 0 }
 *
 * \@media (max-width: 600px) {
 *   .css { margin-top: 16px }
 *   .css + .css { margin-top: 8px }
 * }
 */

const combineSelectors = (...selectors) => (props, mediaKey, style) => selectors.map(
  (selectorOrValue) => isFn(selectorOrValue)
    ? selectorOrValue(props, mediaKey, style)
    : handlePropStyle(style, selectorOrValue, props, mediaKey)
)

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
  propSelector,
  combineSelectors,
  handlePropStyle,
  sizeValue,
  themeSelector,
  spaceValue,
  skipPropValue
}
