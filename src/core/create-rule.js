import { isBool, isNum, isFn, identity, isStr, mapObj, isObj } from '@exah/utils'
import { wrap, wrapIfMedia, getThemeMedia, getFirstKey, isMediaKey } from '../utils'

function callAll (current, ...args) {
  const next = current(...args)
  return isFn(next) ? callAll(next, ...args) : next
}

/**
 * ```js
 * import { createRule } from 'pss'
 * ```
 *
 * Create style from value. Must be used with {@link createStyles}.
 *
 * Related: {@link rule}.
 *
 * @param {Object} options
 *
 * @example
 * import pss, { createRule, spaceValue } from 'pss'
 *
 * const Box = styled.div(pss({
 *   gap: createRule({
 *     getStyle: (val) => ({ margin: val, padding: val }),
 *     getValue: spaceValue()
 *   })
 * }))
 *
 * @example
 * // Add theme to ThemeProvider
 * <ThemeProvider theme={theme}>
 *   <Box gap={1} /> // → margin: 8px; padding: 8px;
 * </ThemeProvider>
 */

export function createRule ({
  cssProp,
  getStyle = wrap(cssProp),
  getValue = identity
}) {
  return (input, props, mediaKey) => {
    const result = callAll(getValue, input, props, mediaKey)

    if (isObj(result)) {
      const themeMedia = getThemeMedia(props)

      if (isMediaKey(getFirstKey(result), themeMedia)) {
        return mapObj(
          (key, value) => wrapIfMedia(themeMedia[key], getStyle(value, props)),
          result
        )
      }
    }

    // not valid result
    if (isBool(result) || result == null) {
      // valid input fallback
      if (isStr(input) || isNum(input)) {
        return getStyle(input, props)
      }

      return null
    }

    return getStyle(result, props)
  }
}
