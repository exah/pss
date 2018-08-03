import { combine } from '../utils/fns'
import { basePropStyles } from './base'
import { positionPropStyles } from './position'
import { borderPropStyles } from './border'
import { displayPropStyles } from './display'
import { floatPropStyles } from './float'
import { ratioPropStyles } from './ratio'
import { overflowPropStyles } from './overflow'
import { utilityPropStyles } from './utility'

/**
 * Alias **`system`**
 *
 * ```js
 * import { system } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link basePropStyles}
 *   - {@link borderPropStyles}
 *   - {@link positionPropStyles}
 *   - {@link displayPropStyles}
 *   - {@link ratioPropStyles}
 *   - {@link floatPropStyles}
 *   - {@link overflowPropStyles}
 *   - {@link utilityPropStyles}
 *
 * @example
 * import styled from 'react-emotion'
 * import { system } from 'pss'
 *
 * const Box = styled('div')(system)
 *
 * @example
 * <Box prl ht='300px' wd='300px' mgx='auto'>
 *   <Box pab t={0} l={0} bg='red' ht='20px' wd='20px' />
 * </Box>
 *
 * @example
 * .css-0 {
 *   position: relative;
 *   height: 300px;
 *   width: 300px;
 *   margin-left: auto;
 *   margin-right: auto;
 * }
 *
 * .css-1 {
 *   position: absolute;
 *   top: 0;
 *   left: 0;
 *   background-color: red;
 *   height: 20px;
 *   width: 20px;
 * }
 */

const systemPropStyles = combine(
  basePropStyles,
  borderPropStyles,
  positionPropStyles,
  displayPropStyles,
  floatPropStyles,
  overflowPropStyles,
  ratioPropStyles,
  utilityPropStyles
)

export {
  systemPropStyles
}
