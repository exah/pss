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
 *   <Text fontFamily='ui'> // → font-family: system-ui, Helvetica, sans-serif
 *     Hello World!
 *   </Text>
 * </ThemeProvider>
 */

export function themeValue ({
  themeKey,
  transformValue = identity,
  fallback,
  scale = {},
  keyword = 'auto'
} = {}) {
  const getThemeScale = themePath(themeKey, scale)

  return (defaultValue = fallback) => (input, props, mediaKey) => {
    const isDefaultValue = input === true || (keyword != null && input === keyword)

    const valueKey = isDefaultValue
      ? getDefault(themeKey)(props)
      : input

    const themeScale = getThemeScale(props)
    const result = path(valueKey, defaultValue)(themeScale)

    if (isObj(result)) {
      if (result.hasOwnProperty(mediaKey)) {
        return transformValue(result[mediaKey])
      }

      return mapObj(
        (key, val) => ({ [key]: transformValue(val) }),
        result
      )
    }

    return transformValue(result)
  }
}
