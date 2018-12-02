// @flow

import type { PropStyle, ThemeKey } from '../types'
import { identity } from '@exah/utils'
import { everyMediaValue } from '../core/every-media'
import { getThemeMediaValue } from '../getters'

/**
 * ```js
 * import { themeValue } from 'pss'
 * ```
 *
 * Use styles defined in `theme[themeKey]`. Useful for creating global shared styles.
 *
 * See {@link textStyle}.
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

const themeValue = (options: {
  themeKey?: ThemeKey,
  themeGetter?: Function,
  transformValue?: Function
}): PropStyle => {
  const {
    themeKey,
    themeGetter = getThemeMediaValue(themeKey),
    transformValue = identity
  } = options

  return (input, props, mediaKey) => everyMediaValue(
    themeGetter(input, null, mediaKey),
    (value) => transformValue(value, input, props, mediaKey)
  )(props)
}

export {
  themeValue
}
