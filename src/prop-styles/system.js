import { combine } from '../utils'
import { base } from './base'
import { position } from './position'
import { border } from './border'
import { display } from './display'
import { float } from './float'
import { ratio } from './ratio'
import { overflow } from './overflow'
import { utility } from './utility'

/**
 * ```js
 * import { system } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link base}
 *   - {@link border}
 *   - {@link position}
 *   - {@link display}
 *   - {@link ratio}
 *   - {@link float}
 *   - {@link overflow}
 *   - {@link utility}
 *
 * @example
 * import { system } from 'pss'
 *
 * const Box = styled('div')(system)
 *
 * @example
 * <Box position='relative' height='300px' width='300px' mgx='auto'>
 *   <Box position='absolute' top={0} left={0} bg='red' height='20px' width='20px' />
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

const system = combine(
  base,
  border,
  position,
  display,
  float,
  overflow,
  ratio,
  utility
)

export {
  system
}
