import { createPropStyles, experimentalCreateRule } from '../core'
import { boolValue } from '../value'

/**
 * ```js
 * import { overflow } from 'pss'
 * ```
 *
 * prop      | css                              | type                | value | true                   | false
 * :---------|:---------------------------------|:--------------------|:------|:-----------------------|:--------
 * `ov`      | `overflow`                       | `String`, `Boolean` | ✓     | `auto`                 | `visible`
 * `ovx`     | `overflow-x`                     | `String`, `Boolean` | ✓     | `auto`                 | `visible`
 * `ovh`     | `overflow`                       | `true`              | —     | `hidden`               | —
 * `ovtouch` | `-webkit-overflow-scrolling`     | `true`              | —     | `touch`                | —
 * `ovsx`    | `overflow-x` <br /> `overflow-y` | `true`              | —     | `auto` <br /> `hidden` | —
 * `ovsy`    | `overflow-x` <br /> `overflow-y` | `true`              | —     | `hidden` <br /> `auto` | —
 *
 *
 * @example
 * import { overflow } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Box = styled('div')(overflow)
 *
 * @example
 * <Box ovh /> // overflow: hidden
 */

const overflow = createPropStyles({
  ov: experimentalCreateRule('overflow', boolValue('auto', 'visible')),
  ovx: experimentalCreateRule('overflowX', boolValue('auto', 'visible')),
  ovy: experimentalCreateRule('overflowY', boolValue('auto', 'visible')),
  ovh: { overflow: 'hidden' },
  ovsx: { overflowX: 'auto', overflowY: 'hidden' },
  ovsy: { overflowX: 'hidden', overflowY: 'auto' },
  ovtouch: { 'WebkitOverflowScrolling': 'touch' }
})

export {
  overflow
}
