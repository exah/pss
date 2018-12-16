import { combine } from '../utils'
import { base } from './base'
import { border } from './border'
import { boxStyle } from './box-style'
import { display } from './display'
import { float } from './float'
import { overflow } from './overflow'
import { position } from './position'
import { ratio } from './ratio'
import { textStyle } from './text-style'
import { utility } from './utility'

/**
 * ```js
 * import { system } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link base}
 *   - {@link border}
 *   - {@link boxStyle}
 *   - {@link cursor}
 *   - {@link display}
 *   - {@link float}
 *   - {@link opacity}
 *   - {@link outline}
 *   - {@link overflow}
 *   - {@link position}
 *   - {@link radius}
 *   - {@link ratio}
 *   - {@link textStyle}
 *   - {@link transition}
 *
 * @example
 * import { system } from 'pss'
 *
 * const Box = styled.div`
 *   ${system}
 * `
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
  boxStyle,
  display,
  float,
  overflow,
  position,
  ratio,
  textStyle,
  utility
)

export {
  system
}
