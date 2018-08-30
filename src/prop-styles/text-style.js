import { TEXT_STYLE_KEY } from '../constants'
import { stylesInTheme } from '../core'

/**
 * ```js
 * import { textStyle } from 'pss'
 * ```
 *
 * Global text styles system, like in [Sketch](https://sketchapp.com/docs/text/text-styles).
 *
 * Examples use this [`theme`](#createtheme):
 *
 * ```js
 *  import { createTheme } from 'pss'
 *
 *  const theme = createTheme({
 *    textStyle: {
 *      default: {
 *        fontSize: '16px',
 *        lineHeight: 1.2,
 *        fontWeight: normal,
 *        fontFamily: 'system-ui'
 *      },
 *      heading: {
 *        fontSize: '2rem',
 *        lineHeight: 1.2,
 *        fontWeight: 'bold',
 *        fontFamily: 'system-ui'
 *      }
 *    }
 *  })
 * ```
 *
 * @example
 * import { textStyle } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Text = styled('div')(textStyle)
 *
 * @example
 * <Text textStyle='heading' />
 */

const textStyle = stylesInTheme({
  themeKey: TEXT_STYLE_KEY,
  propName: 'textStyle'
})

export {
  textStyle
}
