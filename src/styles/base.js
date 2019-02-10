import { combineStyles } from '../core'
import { space } from './space'
import { sizes } from './sizes'
import { colors } from './colors'

/**
 * @private DEPRECATED
 *
 * ```js
 * import { base } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link space}
 *   - {@link sizes}
 *   - {@link colors}
 *
 * Related: {@link combineStyles}.
 *
 * @param {Object} props
 *
 * @example
 * import { base } from 'pss'
 *
 * const Box = styled.div`
 *   ${base}
 * `
 *
 * @example
 * <Box tm='inverted' minHeight='200px' maxWidth='site' mgx='auto' pd={2} />
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

const base = combineStyles(
  space,
  sizes,
  colors
)

export {
  base
}
