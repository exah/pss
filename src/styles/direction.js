import { createStyles, combineStyles } from '../core'
import { directionRule } from '../rules'
import { zIndex } from './z-index'

/**
 * ```js
 * import { direction } from 'pss'
 * ```
 *
 * prop       | css       | type                          | value | true   | false
 * :----------|:----------|:------------------------------|:------|:-------|:--------
 * `left`     | `left`    | `String`, `Number`, `Boolean` | ✓     | `0`    | `auto`
 * `right`    | `right`   | `String`, `Number`, `Boolean` | ✓     | `0`    | `auto`
 * `top`      | `top`     | `String`, `Number`, `Boolean` | ✓     | `0`    | `auto`
 * `bottom`   | `bottom`  | `String`, `Number`, `Boolean` | ✓     | `0`    | `auto`
 * `zIndex`   | `z-index` | `String`, `Number`, `Boolean` | ✓     | `1`    | `auto`
 *
 *
 * Related: {@link position}, {@link rule}, {@link boolValue}, {@link sizeValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { position, direction } from 'pss'
 *
 * const Box = styled.div`
 *   position: relative;
 *   ${direction}
 * `
 *
 * @example
 * <Box top={0.2} left={0} /> // position: relative; top: 20%; left: 0
 */

const direction = combineStyles(
  createStyles({
    top: directionRule('top'),
    left: directionRule('left'),
    right: directionRule('right'),
    bottom: directionRule('bottom')
  }),
  zIndex // COMPAT
)

export {
  direction
}
