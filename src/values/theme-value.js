import { identity } from '@exah/utils'
import { everyMedia } from '../core/every-media'
import { getThemeValue } from '../getters'

/**
 * ```js
 * import { themeValue } from 'pss'
 * ```
 *
 * Use styles defined in `theme[themeKey]`. Useful for creating global shared styles.
 *
 * See {@link textStyle}.
 *
 * @param {Object} [options = {}]
 * @param {String} options.themeKey
 * @param {Function} [options.transformValue = identity]
 * @param {Function} [options.themeGetter = getThemeValue(themeKey, transformValue)]
 * @return {Function}
 *
 * @example
 * const theme = {
 *   textStyle: {
 *     default: {
 *       fontSize: '16px',
 *       lineHeight: 1.2,
 *       fontFamily: 'system-ui'
 *     },
 *     heading: {
 *       fontSize: '2rem',
 *       lineHeight: 1.2,
 *       fontWeight: 'bold',
 *       fontFamily: 'system-ui'
 *     }
 *   }
 * }
 *
 * @example
 * import pss, { themeValue } from 'pss'
 *
 * const Text = styled.div(pss({
 *   textStyle: themeValue({ themeKey: 'textStyle' }),
 *   fontFamily: rule('fontFamily', themeValue({ themeKey: 'font' }))
 * }))
 *
 * <ThemeProvider theme={theme}>
 *   <Text textStyle='heading'>
 *     Hello World!
 *   </Text>
 * </ThemeProvider>
 *
 * @example
 * .css {
 *   font-size: 2rem;
 *   line-height: 1.2;
 *   font-weight: bold;
 *   font-family: system-ui;
 * }
 */

function themeValue ({
  themeKey,
  transformValue = identity,
  themeGetter = getThemeValue(themeKey, transformValue)
} = {}) {
  return (input, props, mediaKey) => everyMedia(
    themeGetter(input, null, mediaKey)(props),
    (value) => transformValue(value, input, props, mediaKey),
    props
  )
}

export {
  themeValue
}
