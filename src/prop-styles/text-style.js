import { TEXT_STYLE_KEY } from '../constants'
import { createPropStyles, createThemeStyle } from '../core'

/**
 * ```js
 * import { textStyle } from 'pss'
 * ```
 *
 * Global text styles system, like in [Sketch](https://sketchapp.com/docs/text/text-styles).
 * Add `textStyle` to `theme`:
 *
 * ```js
 * const theme = {
 *   textStyle: {
 *     default: {
 *       fontSize: '16px',
 *       lineHeight: 1.2,
 *       fontWeight: normal,
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
 * ```
 *
 * @example
 * import { textStyle } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Text = styled('span')(textStyle)
 *
 * @example
 * <Text textStyle={true} /> // → `theme.textStyle.default`
 * <Text textStyle='heading' /> // → `theme.textStyle.heading`
 */

const textStyle = createPropStyles({
  textStyle: createThemeStyle({ themeKey: TEXT_STYLE_KEY })
})

export {
  textStyle
}
