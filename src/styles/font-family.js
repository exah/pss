import { FONT_KEY } from '../constants'
import { createPropStyles, rule } from '../core'
import { themeValue } from '../values'

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

const fontFamily = createPropStyles({
  fontFamily: rule('fontFamily', themeValue({
    themeKey: FONT_KEY
  }))
})

export {
  fontFamily
}