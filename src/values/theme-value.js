import { path, identity, isObj, mapObj } from '@exah/utils'
import { getDefault, themePath } from '../utils'

/**
 * ```js
 * import { themeValue } from 'pss'
 * ```
 *
 * Use values defined in `theme[themeKey]`.
 *
 * See {@link fontFamily}, {@link radius}.
 *
 * @param {Object} [options = {}]
 * @return {Function}
 *
 * @example
 * const theme = {
 *   font: {
 *     heading: 'Times New Roman, serif',
 *     ui: 'system-ui, Helvetica, sans-serif'
 *   }
 * }
 *
 * @example
 * import pss, { themeValue } from 'pss'
 *
 * const Text = styled.div(pss({
 *   fontFamily: rule('fontFamily', themeValue({ themeKey: 'font' }))
 * }))
 *
 * <ThemeProvider theme={theme}>
 *   <Text fontFamily='ui'>
 *     Hello World!
 *   </Text>
 * </ThemeProvider>
 *
 * @example
 * .css {
 *   font-family: system-ui, Helvetica, sans-serif;
 * }
 */

function themeValue ({
  themeKey,
  transformValue = identity,
  keyword = true,
  fallback,
  scale = {}
} = {}) {
  return (defaultValue = fallback) => (input, props, mediaKey) => {
    const valueKey = input === keyword
      ? getDefault(themeKey)(props)
      : input

    const themeScale = themePath(themeKey, scale)(props)
    const value = path(valueKey, defaultValue)(themeScale)

    if (Object(value).hasOwnProperty(mediaKey)) {
      return transformValue(value[mediaKey])
    }

    if (isObj(value)) {
      return mapObj(
        (key, val) => ({ [key]: transformValue(val) }),
        value
      )
    }

    return transformValue(value)
  }
}

export {
  themeValue
}
