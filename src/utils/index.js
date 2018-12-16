import { isFn, isNum, isObj, toArr, curryN } from '@exah/utils'

export const toUnit = curryN(2, (unit, n) => isNum(n) && n !== 0 ? n + unit : n)
export const px = toUnit('px')
export const percent = (n) => (n <= 0 || n > 1 || !isNum(n)) ? n : `${n * 100}%`

export const wrap = curryN(2, (name, value) => value != null
  ? (name ? { [name]: value } : value)
  : null
)

export const wrapIfMedia = (query, style) => wrap(
  query ? `@media ${query}` : null,
  style
)

export const handlePropStyle = (style, input, props, mediaKey) => isFn(style)
  ? style(input, props, mediaKey)
  : input === true ? style : null

export const getNumber = (str) => parseFloat(str, 10)

export const getUnit = (str) => String(str)
  .replace(/([\d.]+)(\D+)?$/, '$2')
  .trim()

export const splitUnit = (str) => [ getNumber(str), getUnit(str) ]

export const keys = (obj) => isObj(obj) ? Object.keys(Object(obj)) : []

export const hasMediaKeys = (media, val) => {
  const mediaKeys = keys(media)
  return toArr(val).some((key) => mediaKeys.includes(key))
}

/**
 * Combine multiple styles together
 *
 * @example
 * import { combine } from 'pss'
 *
 * @example
 * import { combine, margin, padding } from 'pss'
 *
 * const space = combine(
 *   margin,
 *   padding
 * )
 *
 * const Space = styled.div`
 *   ${space}
 * `
 *
 * Space.propTypes = {
 *   ...space.propTypes
 * }
 */

export const combine = (...fns) => {
  const combined = (...args) => fns.map((fn) => fn(...args))
  const propTypes = fns.reduce((acc, fn) => ({
    ...acc,
    ...(fn && fn.propTypes)
  }), {})

  return Object.assign(combined, { propTypes })
}

export const floor = (number, precision = 0) => {
  const factor = Math.pow(10, precision)
  return Math.floor(number * factor) / factor
}
