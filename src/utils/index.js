import { isNum, isStr, curryN } from '@exah/utils'

/**
 * Convert number to rem
 *
 * @example
 * import { rem } form 'pss'
 *
 * rem() // → 1rem
 * rem(16) // → 1rem
 * rem(20) // → 1.25rem
 * rem('20px') // → 1.25rem
 * rem(20, 20) // → 1rem
 */

export const rem = (input = 16, base = 16) =>
  /rem$/.test(input) ? input : `${parseFloat(input, 10) / base}rem`

export const px = (n) => isNum(n) && n !== 0 ? `${n}px` : n

export const wrap = curryN(2, (name, value) => value != null
  ? (name ? { [name]: value } : value)
  : null
)

export const wrapIfMedia = (query, style) => wrap(
  query ? `@media ${query}` : null,
  style
)

const parseUnit = (str) => str.replace(/([\d.]+)(\D+)?$/, '$2').trim()

export const splitUnit = (input) => isStr(input)
  ? [ parseFloat(input, 10), parseUnit(input) || undefined ]
  : [ input, undefined ]

export const floor = (number, precision = 0) => {
  const factor = Math.pow(10, precision)
  return Math.floor(number * factor) / factor
}
