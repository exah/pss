import { style } from '../core'
import { sizeValue } from '../values'

/**
 * ```js
 * import { flex } from 'pss'
 * ```
 *
 * prop    | css     | theme    | value | default
 * :-------|:------- |:---------|:------|:-------
 * `flex`  | `flex`  | `size`   | ✓     | —
 *
 * Related: {@link rule}, {@link sizeValue}.
 *
 * @example
 * import { flex } from 'pss'
 *
 * const Box = styled.div`
 *   ${flex}
 * `
 *
 * @example
 * <FlexBox> // display: flex
 *   <Box flex='1 1 auto'>2</Box> // flex: 1 1 auto
 * </FlexBox>
 */

export const flex = style({
  cssProp: 'flex',
  getValue: sizeValue()
})
