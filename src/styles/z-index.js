import { createStyles, rule } from '../core'
import { boolValue } from '../values'

/**
 * ```js
 * import { zIndex } from 'pss'
 * ```
 *
 * prop       | css       | type                          | value | true   | false
 * :----------|:----------|:------------------------------|:------|:-------|:--------
 * `zIndex`   | `z-index` | `String`, `Number`, `Boolean` | ✓     | `1`    | `auto`
 *
 *
 * Related: {@link position}, {@link rule}, {@link boolValue}, {@link sizeValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { zIndex } from 'pss'
 *
 * const Box = styled.div`
 *   position: relative;
 *   ${zIndex}
 * `
 *
 * @example
 * <Box zIndex={10} /> // position: relative; z-index: 10;
 */

const zIndex = createStyles({
  zIndex: rule('zIndex', boolValue(1, 'auto'))
})

export {
  zIndex
}
