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

/**
 * Convert numbers to pixels
 *
 * @example
 * import { px } from 'pss'
 *
 * px(30) // → '30px'
 * px(0) // → 0
 * px('100px') // → '100px'
 * px('100rem') // → '100rem'
 */

export const px = (num) => isNum(num) && num !== 0 ? `${num}px` : num

export const wrap = curryN(2, (name, value) => value != null
  ? (name ? { [name]: value } : value)
  : null
)

export const wrapIfMedia = (query, style) => wrap(
  query ? `@media ${query}` : null,
  style
)

const parseUnit = (str) => str.replace(/([\d.]+)(\D+)?$/, '$2').trim() || undefined

/**
 * @example
 * import { splitUnit } from 'pss'
 *
 * const [ value, unit ] = splitUnit('30px') // → [ 30, 'px' ]
 */

export const splitUnit = (input) => isStr(input)
  ? [ parseFloat(input, 10), parseUnit(input) ]
  : (isNum(input) ? [ input, undefined ] : [])

export const floor = (number, precision = 0) => {
  const factor = Math.pow(10, precision)
  return Math.floor(number * factor) / factor
}
