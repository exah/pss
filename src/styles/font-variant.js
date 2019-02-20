import { FONT_KEY } from '../constants'
import { createVariant } from '../core'

/**
 * ```js
 * import { fontVariant } from 'pss'
 * ```
 *
 * Set `fontFamly` from `theme`:
 *
 * ```js
 * const theme = {
 *   default: {
 *     font: 'ui'
 *   },
 *   font: {
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
 * import { fontVariant } from 'pss'
 *
 * const Text = styled.p`
 *   ${fontVariant}
 * `
 *
 * @example
 * <Text font={true} /> // → font-family: Helvetica
 * <Text font='ui' /> // → font-family: Helvetica
 * <Text font='heading' /> // → font-family: Times
 * <Text font='Comic Sans' /> // → font-family: Comic Sans
 */

const fontVariant = createVariant({
  themeKey: FONT_KEY,
  prop: 'font',
  cssProp: 'fontFamily'
})

export {
  fontVariant
}
