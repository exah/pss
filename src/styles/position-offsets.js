import { createStyles } from '../core'
import { positionRule } from '../rules'

/**
 * ```js
 * import { positionOffsets } from 'pss'
 * ```
 *
 * prop       | css       | type                          | value | true   | false
 * :----------|:----------|:------------------------------|:------|:-------|:--------
 * `left`     | `left`    | `String`, `Number`, `Boolean` | ✓     | —      | —
 * `right`    | `right`   | `String`, `Number`, `Boolean` | ✓     | —      | —
 * `top`      | `top`     | `String`, `Number`, `Boolean` | ✓     | —      | —
 * `bottom`   | `bottom`  | `String`, `Number`, `Boolean` | ✓     | —      | —
 *
 *
 * Related: {@link position}, {@link rule}, {@link boolValue}, {@link sizeValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { positionOffsets } from 'pss'
 *
 * const Box = styled.div`
 *   position: relative;
 *   ${positionOffsets}
 * `
 *
 * @example
 * <Box top={1 / 5} left={0} /> // position: relative; top: 20%; left: 0
 */

const positionOffsets = createStyles({
  top: positionRule('top'),
  left: positionRule('left'),
  right: positionRule('right'),
  bottom: positionRule('bottom')
})

export {
  positionOffsets
}
