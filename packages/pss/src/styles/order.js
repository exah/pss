import { style } from '../core'

/**
 * ```js
 * import { order } from 'pss'
 * ```
 *
 * prop     | css      | theme | value | default
 * :--------|:---------|:------|:------|:-------
 * `order`  | `order`  | —     | ✓     | —
 *
 * Related: {@link rule}, {@link sizeValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { order } from 'pss'
 *
 * const Box = styled.div`
 *   ${order}
 * `
 *
 * @example
 * <FlexBox> // display: flex
 *   <Box>2</Box>
 *   <Box order={1}>1</Box>
 * </FlexBox>
 */

export const order = style({
  cssProp: 'order'
})
