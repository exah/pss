import { createPropStyles, rule } from '../core'
import { boolValue } from '../values'

/**
 * ```js
 * import { overflow } from 'pss'
 * ```
 *
 * prop      | css                              | type                | value | true                   | false
 * :---------|:---------------------------------|:--------------------|:------|:-----------------------|:--------
 * `ov`      | `overflow`                       | `String`, `Boolean` | ✓     | `auto`                 | `visible`
 * `ovx`     | `overflow-x`                     | `String`, `Boolean` | ✓     | `auto`                 | `visible`
 * `ovy`     | `overflow-y`                     | `String`, `Boolean` | ✓     | `auto`                 | `visible`
 * `ovh`     | `overflow`                       | `true`              | —     | `hidden`               | —
 * `ovsx`    | `overflow-x` <br /> `overflow-y` | `true`              | —     | `auto` <br /> `hidden` | —
 * `ovsy`    | `overflow-x` <br /> `overflow-y` | `true`              | —     | `hidden` <br /> `auto` | —
 * `ovtouch` | `-webkit-overflow-scrolling`     | `true`              | —     | `touch`                | —
 *
 *
 * @example
 * import { overflow } from 'pss'
 *
 * const Box = styled.div`
 *   ${overflow}
 * `
 *
 * @example
 * <Box ovh /> // overflow: hidden
 */

const overflow = createPropStyles({
  ov: rule('overflow', boolValue('auto', 'visible')),
  ovx: rule('overflowX', boolValue('auto', 'visible')),
  ovy: rule('overflowY', boolValue('auto', 'visible')),
  ovh: { overflow: 'hidden' },
  ovsx: { overflowX: 'auto', overflowY: 'hidden' },
  ovsy: { overflowX: 'hidden', overflowY: 'auto' },
  ovtouch: { 'WebkitOverflowScrolling': 'touch' }
})

export {
  overflow
}
