// @flow

import type {
  PropStyle,
  Mixin,
  ThemeKey
} from '../types'

import { isStr, mapObj, identity } from '@exah/utils'
import { getThemeMediaValue, themePath } from '../getters'
import { createPropStyles } from './create-prop-styles'
import { everyMediaValue } from './every-media'

/**
 * ```js
 * import { createStyleFromTheme } from 'pss'
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
 * import { createPropStyles, createStyleFromTheme } from 'pss'
 *
 * const Text = styled.div(createPropStyles({
 *   ts: createStyleFromTheme({ themeKey: 'textStyle' })
 * }))
 *
 * <ThemeProvider theme={theme}>
 *   <Text ts='heading'>
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

const createStyleFromTheme = (options: {
  themeKey: ? ThemeKey,
  themeGetter?: ? Function,
  getStyle?: Function
}): PropStyle => {
  const { themeKey, themeGetter, getStyle = identity } = options
  const getter = themeGetter || getThemeMediaValue(themeKey)

  return (input, props, mediaKey) => everyMediaValue(
    getter(input, null, mediaKey),
    (style) => getStyle(style, input)
  )(props)
}

/**
 * ```js
 * import { propStylesInTheme } from 'pss'
 * ```
 *
 * Create prop styles using styles defined directly inside `theme[themeKey]`. Useful for creating shared text or buttons styles. Styles is used as flags `<Comp styleKey1 styleKey2 />`.
 *
 *
 * @example
 * const theme = {
 *   textStyleFlags: {
 *     caps: {
 *       textTransform: 'uppercase'
 *     },
 *     underline: {
 *       borderBottom: '1px solid'
 *     }
 *   }
 * }
 *
 * @example
 * import styled from 'react-emotion'
 * import { propStylesInTheme } from 'pss'
 *
 * const Text = styled.div(propStylesInTheme('textStyleFlags'))
 *
 * <ThemeProvider theme={theme}>
 *   <Text caps underline>
 *     Hello World!
 *   </Text>
 * </ThemeProvider>
 *
 * @example
 * .css {
 *   text-transform: uppercase;
 *   border-bottom: 1px solid;
 * }
 */

const propStylesInTheme = (
  themeKey: ThemeKey,
  propName: ? string, // COMPAT
  themeGetter: ? Function
): Mixin => {
  const style = createStyleFromTheme({
    themeKey,
    themeGetter
  })

  if (isStr(propName)) {
    return createPropStyles({
      [propName]: style
    })
  }

  let cachedPropStyles = null

  return (props) => {
    if (cachedPropStyles === null) {
      cachedPropStyles = createPropStyles(mapObj(
        (key) => [
          key,
          (input, ...args) => input === true ? style(key, ...args) : null
        ],
        themePath(themeKey, {})(props)
      ))
    }

    return cachedPropStyles(props)
  }
}

export {
  propStylesInTheme,
  createStyleFromTheme
}
