import { toArr } from '@exah/utils'
import { getThemeValue } from '../getters'
import { everyMedia } from './every-media'

/**
 * ```js
 * import { themeStyle } from 'pss'
 * ```
 *
 * Use styles defined in `theme[themeKey]`. Useful for creating global shared styles.
 *
 * Related: {@link textStyle}.
 *
 * @param {Object} [options = {}]
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
 * import pss, { themeStyle } from 'pss'
 *
 * const Text = styled.div(pss({
 *   textStyle: themeStyle({ themeKey: 'textStyle' })
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

function themeStyle ({
  themeKey,
  transformValue,
  scale,
  getter = getThemeValue({ themeKey, transformValue, scale })
} = {}) {
  return (inputs, props, mediaKey) => toArr(inputs).reduce((acc, input) => ({
    ...acc,
    ...everyMedia(props, getter(input, null, mediaKey)(props))
  }), {})
}

export {
  themeStyle
}
