import { getThemeValue } from '../getters'

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
 * @param {String} options.themeKey
 * @param {Function} [options.transformValue = identity]
 * @param {Function} [options.themeGetter = getThemeValue(themeKey, transformValue)]
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
  transformValue,
  scale,
  getter = getThemeValue({ themeKey, transformValue, scale })
} = {}) {
  return (input, props, mediaKey) => getter(input, input, mediaKey)(props)
}

export {
  themeValue
}
