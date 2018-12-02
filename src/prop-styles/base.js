import { combine } from '../utils'
import { space } from './space'
import { sizes } from './sizes'
import { colors } from './colors'

/**
 * ```js
 * import { base } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link space}
 *   - {@link sizes}
 *   - {@link colors}
 *
 * @example
 * import { base } from 'pss'
 *
 * const Box = styled.div`
 *   ${base}
 * `
 *
 * @example
 * <Box tm='inverted' minHeight='200px' maxWidth='site.width' mgx='auto' pd={2} />
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

const base = combine(
  space,
  sizes,
  colors
)

export {
  base
}
