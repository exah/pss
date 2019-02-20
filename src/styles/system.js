import { combineStyles } from '../core'
import { base } from './base'
import { border } from './border'
import { boxSelfAlignment } from './box-alignment'
import { boxStyle } from './box-style'
import { cursor } from './cursor'
import { direction } from './direction'
import { display } from './display'
import { flex } from './flex'
import { float } from './float'
import { opacity } from './opacity'
import { order } from './order'
import { outline } from './outline'
import { overflow } from './overflow'
import { position } from './position'
import { radius } from './radius'
import { ratio } from './ratio'
import { textStyle } from './text-style'
import { transform } from './transform'
import { transition } from './transition'

/**
 * @private DEPRECATED
 *
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
 *   - {@link flex}
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
 * Related: {@link combineStyles}.
 *
 * @param {Object} props
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

const system = combineStyles(
  base,
  border,
  boxSelfAlignment,
  boxStyle,
  cursor,
  direction,
  display,
  flex,
  float,
  opacity,
  order,
  outline,
  overflow,
  position,
  radius,
  ratio,
  textStyle,
  transform,
  transition
)

export {
  system
}
