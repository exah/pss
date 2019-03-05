import { combineStyles } from '../core'
import { border } from './border'
import { boxSelfAlignment } from './box-alignment'
import { boxShadow } from './box-shadow'
import { colors } from './colors'
import { display } from './display'
import { flex } from './flex'
import { order } from './order'
import { outline } from './outline'
import { overflow } from './overflow'
import { position } from './position'
import { positionOffsets } from './position-offsets'
import { sizes } from './sizes'
import { space } from './space'
import { zIndex } from './z-index'

/**
 * ```js
 * import { box } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link border}
 *   - {@link boxSelfAlignment}
 *   - {@link boxShadow}
 *   - {@link colors}
 *   - {@link display}
 *   - {@link flex}
 *   - {@link order}
 *   - {@link outline}
 *   - {@link overflow}
 *   - {@link positionOffsets}
 *   - {@link position}
 *   - {@link sizes}
 *   - {@link space}
 *   - {@link zIndex}
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
 * <Box mgx='auto' /> // marginLeft: auto; marginRight: auto
 * <Box display='none' /> // display: none
 */

export const box = combineStyles(
  border,
  boxSelfAlignment,
  boxShadow,
  colors,
  display,
  flex,
  order,
  outline,
  overflow,
  position,
  positionOffsets,
  sizes,
  space,
  zIndex
)
