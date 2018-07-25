// @flow

import type {
  DynamicStyleFn,
  CompPropName,
  ThemeKey
} from '../types'

import { isStr } from '../utils/is'
import { mapObj } from '../utils/helpers'
import { getThemeMediaValue, themePath } from '../utils/getters'
import { createPropStyles } from './create-prop-styles'
import { everyMediaValue } from './every-media'

/**
 * ```js
 * import { propStylesInTheme } from '@exah/prop-styles-system'
 * ```
 *
 * Create prop styles using styles defined directly inside `theme[themeKey]`. Useful for creating shared text or buttons styles.
 *
 * - If `propName` specified, styles are accessible with `<Comp propName='styleKey1' />`
 * for `theme[themeKey][styleKey1]`.
 * - Otherwise style keys must be used as flags `<Comp styleKey1 styleKey2 />`.
 *
 * @example
 * import { createTheme } from '@exah/prop-styles-system'
 *
 * const theme = createTheme({
 *   textStyles: {
 *     caps: {
 *       textTransform: 'uppercase'
 *     },
 *     underline: {
 *       borderBottom: '1px solid'
 *     },
 *     heading: {
 *       fontSize: '32px',
 *       lineHeight: 1.2,
 *       fontWeight: 'bold',
 *       fontFamily: 'system-ui'
 *     }
 *   }
 * })
 *
 * @example
 * import styled from 'react-emotion'
 * import { propStylesInTheme } from '@exah/prop-styles-system'
 *
 * const Text = styled.div(propStylesInTheme('textStyles', 'ts'))
 *
 * <ThemeProvider theme={theme}>
 *   <Text ts='heading'> // font-size: 32px; line-height: 1.2; font-weight: bold; font-family: system-ui;
 *     Hello World!
 *   </Text>
 * </ThemeProvider>
 *
 * @example
 * import styled from 'react-emotion'
 * import { propStylesInTheme } from '@exah/prop-styles-system'
 *
 * const Text = styled.div(propStylesInTheme('textStyles'))
 *
 * <ThemeProvider theme={theme}>
 *   <Text caps underline={false}> // text-transform: uppercase;
 *     Hello World!
 *   </Text>
 * </ThemeProvider>
 */

const propStylesInTheme = (
  themeKey: ThemeKey,
  propName: ? CompPropName,
  getStyle: ? Function
): DynamicStyleFn => {
  const getter = getStyle || getThemeMediaValue(themeKey)

  const style = (value, { theme }, mediaKey) => everyMediaValue(
    theme,
    mediaKey,
    getter(theme, value)
  )

  if (isStr(propName)) {
    return createPropStyles({
      [propName]: style
    })
  }

  let cachedPropStyles = null

  return (props) => {
    if (cachedPropStyles === null) {
      cachedPropStyles = createPropStyles(mapObj(
        themePath(themeKey, {})(props.theme),
        ([ key ]) => [
          key,
          (value, ...args) => value === true ? style(key, ...args) : null
        ]
      ))
    }

    return cachedPropStyles(props)
  }
}

export {
  propStylesInTheme
}
