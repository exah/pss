import { compose, path, isNum, isStr, curryN } from '@exah/utils'
import { DEFAULT_KEY, THEME_MEDIA_KEY, DEFAULT_MEDIA_KEY } from './constants'

/**
 * ```js
 * import { themePath } from 'pss'
 * ```
 *
 * Get value from theme.
 *
 * @example
 * import { themePath } from 'pss'
 *
 * const Box = styled.div`
 *   width: ${themePath('size.card')};
 *   background-color: ${themePath('color.red', 'hotpink')};
 * `
 *
 * <Box /> // → width: 200px; background-color: hotpink;
 */

export const themePath = (input, defaultValue) =>
  (props = {}) => path(input, defaultValue)(props.theme)

export const getDefault = (input, defaultValue = DEFAULT_KEY) =>
  themePath([ DEFAULT_KEY, input ], defaultValue)

export const getThemeMedia = themePath(THEME_MEDIA_KEY, {})
export const getMedia = (input) => compose(path(input), getThemeMedia)
export const isMediaKey = (key, media) => (key in media || key === DEFAULT_MEDIA_KEY)

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
 * px('100rem') // → '100rem' (nothing changed)
 */

export const px = (num) => isNum(num) && num !== 0 ? `${num}px` : num

export const cap = (input = '') => input.replace(/^\w/, c => c.toUpperCase())
export const addPrefix = (input = '', prefix) => prefix ? prefix + cap(input) : input

export const wrap = curryN(2, (name, value) => value != null
  ? (name ? { [name]: value } : value)
  : null
)

export const wrapIfMedia = (query, ...args) => wrap(query && `@media ${query}`, ...args)

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
