import { combineStyles } from '../core'
import { border } from './border'
import { borderColor } from './border-color'
import { borderRadius } from './border-radius'
import { boxSelfAlignment } from './box-alignment'
import { boxShadow } from './box-shadow'
import { colors } from './colors'
import { cursor } from './cursor'
import { display } from './display'
import { flex } from './flex'
import { hide } from './hide'
import { opacity } from './opacity'
import { order } from './order'
import { outline } from './outline'
import { overflow } from './overflow'
import { ratio } from './ratio'
import { sizes } from './sizes'
import { space } from './space'
import { transform } from './transform'
import { transition } from './transition'

/**
 * ```js
 * import { box } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link border}
 *   - {@link borderColor}
 *   - {@link borderRadius}
 *   - {@link boxSelfAlignment}
 *   - {@link boxShadow}
 *   - {@link colors}
 *   - {@link cursor}
 *   - {@link display}
 *   - {@link flex}
 *   - {@link hide}
 *   - {@link opacity}
 *   - {@link order}
 *   - {@link outline}
 *   - {@link overflow}
 *   - {@link ratio}
 *   - {@link sizes}
 *   - {@link space}
 *   - {@link transform}
 *   - {@link transition}
 *
 * Related: {@link boxStyle}, {@link combineStyles}.
 *
 * @param {Object} props
 *
 * @example
 * import { box } from 'pss'
 *
 * const Box = styled.p`
 *   ${box}
 * `
 *
 * @example
 * <Box mx='auto' /> // → marginLeft: auto; marginRight: auto
 * <Box flex='1 1 0' /> // → flex: 1 1 0
 * <Box width={1 / 2} /> // → width: 50%
 */

export const box = combineStyles(
  border,
  borderColor,
  borderRadius,
  boxSelfAlignment,
  boxShadow,
  colors,
  cursor,
  display,
  flex,
  hide,
  opacity,
  order,
  outline,
  overflow,
  ratio,
  sizes,
  space,
  transform,
  transition
)
