// @flow

import type { PropStyle, ThemeKey } from '../types'
import { identity } from '@exah/utils'
import { getThemeMediaValue } from '../getters'
import { everyMediaValue } from './every-media'

/**
 * ```js
 * import { createThemeStyle } from 'pss'
 * ```
 *
 * Create global styles directly inside `theme[themeKey]`.
 * Useful for creating text or buttons styles. See {@link textStyle}.
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
 * import styled from 'react-emotion'
 * import pss, { createThemeStyle } from 'pss'
 *
 * const Text = styled.div(pss({
 *   textStyle: createThemeStyle({ themeKey: 'textStyle' })
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

const createThemeStyle = (options: {
  themeKey?: ThemeKey,
  themeGetter?: Function,
  getStyle?: Function
}): PropStyle => {
  const { themeKey, themeGetter, getStyle = identity } = options
  const getter = themeGetter || getThemeMediaValue(themeKey)

  return (input, props, mediaKey) => everyMediaValue(
    getter(input, null, mediaKey),
    (style) => getStyle(style, input)
  )(props)
}

export {
  createThemeStyle
}
