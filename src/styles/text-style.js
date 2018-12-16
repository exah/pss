import { TEXT_STYLE_KEY } from '../constants'
import { createVariant } from '../core'

/**
 * ```js
 * import { textStyle } from 'pss'
 * ```
 *
 * Global text styles system, like in [Sketch](https://sketchapp.com/docs/text/text-styles).
 *
 * Related: {@link createVariant}, {@link typography}.
 *
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
 * @param {Object} props
 *
 * @example
 * import { textStyle } from 'pss'
 *
 * const Text = styled.p`
 *   ${textStyle}
 * `
 *
 * @example
 * <Text textStyle={true} /> // → `theme.textStyle.default`
 * <Text textStyle='heading' /> // → `theme.textStyle.heading`
 */

const textStyle = createVariant({
  themeKey: TEXT_STYLE_KEY,
  prop: 'textStyle'
})

export {
  textStyle
}
