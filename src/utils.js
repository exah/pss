import { compose, path, isNum, isFn, isStr, curryN, isObj, pipe } from '@exah/utils'
import { DEFAULT_KEY, THEME_MEDIA_KEY, DEFAULT_MEDIA_KEY } from './constants'

const defaultTo = (fallback) => (input) => input == null ? fallback : input

/**
 * ```js
 * import { themePath } from 'pss'
 * ```
 *
 * Get value from theme. Optionally accept fallback and / or list of transforms.
 *
 * @example
 * import { themePath, px } from 'pss'
 *
 * const Box = styled.div`
 *   width: ${themePath('size.card', px)};
 *   background-color: ${themePath('color.red', 'hotpink')};
 * `
 *
 * <Box /> // → width: 200px; background-color: hotpink;
 */

export function themePath (input, defaultValue, ...fns) {
  const toDefault = isFn(defaultValue) ? defaultValue : defaultTo(defaultValue)
  const transform = pipe(toDefault, ...fns)

  return (props) => transform(path(input)(props.theme))
}

export const getDefault = (input, defaultValue = DEFAULT_KEY) =>
  themePath([ DEFAULT_KEY, input ], defaultValue)

export const getThemeMedia = themePath(THEME_MEDIA_KEY, {})
export const getMedia = (input) => compose(path(input), getThemeMedia)
export const isMediaKey = (key, media) => (key in media || key === DEFAULT_MEDIA_KEY)

/**
 * Convert number to rem
 *
 * @param {number} [base = 16] - root font size
 * @param {number} [input = base] - value for convertion
 *
 * @example
 * import { rem } form 'pss'
 *
 * rem(16, 16) // → 1rem
 * rem(16, 20) // → 1.25rem
 * rem(16, '20px') // → 1.25rem
 *
 * const myRem = rem(20)
 * myRem(16) // → 0.8rem
 */

export const rem = curryN(2, (base = 16, input = base) =>
  /rem$/.test(input) ? input : `${parseFloat(input, 10) / base}rem`
)

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

export const getFirstKey = (input) => Object.keys(Object(input))[0]

export const getFirst = (input) => {
  if (isObj(input)) {
    if (input.hasOwnProperty(DEFAULT_KEY)) {
      return input.default
    }

    const firstKey = getFirstKey(input)
    return firstKey && input[firstKey]
  }

  return input
}
