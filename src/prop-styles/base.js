import { combine } from '../utils/fns'
import { spacePropStyles } from './space'
import { sizePropsStyles } from './sizes'
import { colorsPropStyles } from './colors'

/**
 * Alias **`base`**
 *
 * ```js
 * import { base } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link spacePropStyles}
 *   - {@link sizePropStyles}
 *   - {@link colorPropStyles}.
 *
 * @example
 * import styled from 'react-emotion'
 * import { base } from 'pss'
 *
 * const Box = styled('div')(base)
 *
 * @example
 * <Box tm='inverted' minHt='200px' maxWd='site.width' mgx='auto' pd={2} />
 *
 * @example
 * .css {
 *   background-color: #000;
 *   color: #fff;
 *   min-height: 200px;
 *   max-width: 1300px;
 *   margin-left: auto;
 *   margin-right: auto;
 *   padding: 20px;
 *
 *   \@media (max-width: 600px) {
 *     padding: 16px;
 *   }
 * }
 */

const basePropStyles = combine(
  spacePropStyles,
  sizePropsStyles,
  colorsPropStyles
)

export {
  basePropStyles
}
