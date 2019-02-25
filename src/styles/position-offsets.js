import { createStyles } from '../core'
import { positionRule } from '../rules'

/**
 * ```js
 * import { positionOffsets } from 'pss'
 * ```
 *
 * prop       | css       | type                          | value | true   | false
 * :----------|:----------|:------------------------------|:------|:-------|:--------
 * `left`     | `left`    | `String`, `Number`, `Boolean` | ✓     | `0`    | `auto`
 * `right`    | `right`   | `String`, `Number`, `Boolean` | ✓     | `0`    | `auto`
 * `top`      | `top`     | `String`, `Number`, `Boolean` | ✓     | `0`    | `auto`
 * `bottom`   | `bottom`  | `String`, `Number`, `Boolean` | ✓     | `0`    | `auto`
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
 * <Box top={0.2} left={0} /> // position: relative; top: 20%; left: 0
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
