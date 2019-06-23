import {
  isStr,
  isNum,
  isBool,
  identity,
  fallbackTo,
  isArr,
  pipe,
  mapObj
} from '@exah/utils'

import { DEFAULT_MEDIA_KEY } from '../constants'
import { px, splitUnit, themePath } from '../utils'

const getSpaceStep = (input, spaces = []) => {
  const value = spaces[Math.abs(input)]
  const coeficent = ((input < 0) ? -1 : 1)

  if (value === undefined) {
    return null
  } else if (isStr(value)) {
    const [ number, unit = 'px' ] = splitUnit(value)
    return (number * coeficent) + unit
  }

  return (value * coeficent)
}

export function createSpaceValue ({
  themeKey = 'space',
  scale = [ 0, 4, 8, 16, 32, 64, 128, 256 ],
  transformValue = identity,
  getter = themePath(themeKey, scale)
} = {}) {
  const transform = pipe(getSpaceStep, transformValue)

  return (defaultValue) => (
    input,
    props,
    mediaKey
  ) => {
    if (isNum(input) || isBool(input)) {
      const spaces = getter(props)

      if (isArr(spaces)) {
        return transform(input, spaces)
      }

      if (mediaKey != null) {
        return transform(input, fallbackTo(
          spaces[mediaKey],
          spaces[DEFAULT_MEDIA_KEY]
        ))
      }

      return mapObj(
        (key, value) => ({ [key]: transform(input, value) }),
        spaces
      )
    }

    return defaultValue
  }
}

/**
 * ```js
 * import { spaceValue } from 'pss'
 * ```
 *
 * Spacing system for `margin`, `padding`. Default behaviour described in {@link space}.
 * Must be used with {@link rule}.
 *
 * Related: {@link space}, {@link sizes}, {@link rule}, {@link sizeValue}.
 *
 * @param [defaultValue = sizeValue(identity)] — Fallback value used when prop value is {@link String} or nothing returned.
 * @return {Function} - that must be used in {@link rule}
 *
 * @example
 * import pss, { rule, spaceValue } from 'pss'
 *
 * const spaceRule = (name) => rule(name, spaceValue())
 *
 * const margin = pss({
 *   m: spaceRule('margin'),
 *   ml: spaceRule('marginLeft'),
 *   mr: spaceRule('marginRight'),
 *   mt: spaceRule('marginTop'),
 *   mb: spaceRule('marginBottom'),
 *   mx: [ spaceRule('marginLeft'), spaceRule('marginRight') ],
 *   my: [ spaceRule('marginTop'), spaceRule('marginBottom') ]
 * })
 *
 * const Box = styled.div`
 *   ${margin}
 * `
 *
 * @example
 * const theme = {
 *   media: {
 *     sm: '(max-width: 600px)' // optional
 *   },
 *   space: [ 0, 8, 16, 32, 64 ]
 * }
 *
 * <ThemeProvider theme={theme}>
 *   <Box m={1} /> // → margin: 8px;
 *   <Box mx={2} /> // → margin-left: 16px; margin-right: 16px
 *   <Box m={{ sm: 1 }} /> // → @media (max-width: 600px) { margin: 8px }
 * </ThemeProvider>
 *
 * @example
 * const theme = {
 *   media: {
 *     sm: '(max-width: 600px)'
 *   },
 *   space: {
 *     all: [ 0, 8, 16, 32, 64 ],
 *     sm: [ 0, 4, 8, 16, 32 ]
 *   }
 * }
 *
 * <ThemeProvider theme={theme}>
 *   <Box m={1} /> // → margin: 8px; @media (max-width: 600px) { margin: 4px }
 *   <Box mx={2} /> // → margin-left: 16px; margin-right: 16px; @media (max-width: 600px) { margin-left: 8px; margin-right: 8px; }
 *   <Box m={{ sm: 1 }} /> // → @media (max-width: 600px) { margin: 4px }
 * </ThemeProvider>
 */

export const spaceValue = createSpaceValue({
  transformValue: px
})
