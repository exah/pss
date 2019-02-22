import { combineStyles } from '../core'
import { space } from './space'
import { sizes } from './sizes'
import { colors } from './colors'
import { border } from './border'
import { outline } from './outline'
import { display } from './display'
import { flex } from './flex'
import { boxSelfAlignment } from './box-alignment'
import { position } from './position'
import { direction } from './direction'
import { zIndex } from './z-index'

/**
 * ```js
 * import { box } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link space}
 *   - {@link sizes}
 *   - {@link colors}
 *   - {@link border}
 *   - {@link outline}
 *   - {@link display}
 *   - {@link flex}
 *   - {@link boxSelfAlignment}
 *   - {@link position}
 *   - {@link direction}
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
  space,
  sizes,
  colors,
  border,
  outline,
  display,
  flex,
  boxSelfAlignment,
  position,
  direction,
  zIndex
)
