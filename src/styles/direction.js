import { createStyles } from '../core'
import { directionRule } from '../rules'

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
 *
 *
 * Related: {@link position}, {@link rule}, {@link boolValue}, {@link sizeValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { direction } from 'pss'
 *
 * const Box = styled.div`
 *   position: relative;
 *   ${direction}
 * `
 *
 * @example
 * <Box top={0.2} left={0} /> // position: relative; top: 20%; left: 0
 */

const direction = createStyles({
  top: directionRule('top'),
  left: directionRule('left'),
  right: directionRule('right'),
  bottom: directionRule('bottom')
})

export {
  direction
}
