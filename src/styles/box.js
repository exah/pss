import { combineStyles } from '../core'
import { borders } from './borders'
import { borderColor } from './border-color'
import { borderRadius } from './border-radius'
import { boxSelfAlignment } from './box-alignment'
import { boxShadow } from './box-shadow'
import { colors } from './colors'
import { flex } from './flex'
import { order } from './order'
import { outline } from './outline'
import { overflow } from './overflow'
import { sizes } from './sizes'
import { space } from './space'

/**
 * ```js
 * import { box } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link borders}
 *   - {@link borderColor}
 *   - {@link borderRadius}
 *   - {@link boxSelfAlignment}
 *   - {@link boxShadow}
 *   - {@link colors}
 *   - {@link flex}
 *   - {@link order}
 *   - {@link outline}
 *   - {@link overflow}
 *   - {@link sizes}
 *   - {@link space}
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
 * <Box mgx='auto' /> // → marginLeft: auto; marginRight: auto
 * <Box flex='1 1 0' /> // → flex: 1 1 0
 * <Box width={1 / 2} /> // → width: 50%
 */

export const box = combineStyles(
  borders,
  borderColor,
  borderRadius,
  boxSelfAlignment,
  boxShadow,
  colors,
  flex,
  order,
  outline,
  overflow,
  sizes,
  space
)
