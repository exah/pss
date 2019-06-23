import { sizeRule, directionStyles } from '../.internal'

/**
 * ```js
 * import { positionOffsets } from 'pss'
 * ```
 *
 * prop       | css       | theme   | value | default
 * :----------|:----------|:--------|:------|:-------
 * `left`     | `left`    | `size`  | ✓     | —
 * `right`    | `right`   | `size`  | ✓     | —
 * `top`      | `top`     | `size`  | ✓     | —
 * `bottom`   | `bottom`  | `size`  | ✓     | —
 *
 *
 * Related: {@link position}, {@link rule}, {@link sizeValue}.
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

const positionOffsets = directionStyles({
  rule: sizeRule
})

export {
  positionOffsets
}
