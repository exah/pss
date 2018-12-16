import { FONT_KEY } from '../constants'
import { createVariant } from '../core'

/**
 * ```js
 * import { fontFamily } from 'pss'
 * ```
 *
 * Set `fontFamly` from `theme`:
 *
 * ```js
 * const theme = {
 *   default: {
 *     fontFamily: 'ui'
 *   },
 *   fontFamily: {
 *     heading: 'Times',
 *     ui: 'Helvetica'
 *   }
 * }
 * ```
 *
 * Related: {@link createVariant}.
 *
 * @param {Object} props
 *
 * @example
 * import { fontFamily } from 'pss'
 *
 * const Text = styled.p`
 *   ${fontFamily}
 * `
 *
 * @example
 * <Text fontFamily={true} /> // → font-family: Helvetica
 * <Text fontFamily='ui' /> // → font-family: Helvetica
 * <Text fontFamily='heading' /> // → font-family: Times
 * <Text fontFamily='Comic Sans' /> // → font-family: Comic Sans
 */

const fontFamily = createVariant({
  themeKey: FONT_KEY,
  prop: 'fontFamily',
  cssProp: 'fontFamily'
})

export {
  fontFamily
}
