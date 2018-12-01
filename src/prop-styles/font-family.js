import { FONT_KEY } from '../constants'
import { createPropStyles, createRule } from '../core'
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
 * import styled from 'react-emotion'
 *
 * const Text = styled('span')(fontFamily)
 *
 * @example
 * <Text fontFamily={true} /> // → font-family: Helvetica
 * <Text fontFamily='ui' /> // → font-family: Helvetica
 * <Text fontFamily='serif' /> // → font-family: Times
 * <Text fontFamily='Comic Sans' /> // → font-family: Comic Sans
 */

const fontFamily = createPropStyles({
  fontFamily: createRule('fontFamily', themeValue({
    themeKey: FONT_KEY
  }))
})

export {
  fontFamily
}
