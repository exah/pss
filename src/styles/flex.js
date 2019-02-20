import { createStyles, rule } from '../core'
import { sizeValue } from '../values'

/**
 * ```js
 * import { flex } from 'pss'
 * ```
 *
 * prop    | css     | type     | value | true    | false
 * :-------|:------- |:---------|:------|:------- |:--------
 * `flex`  | `flex`  | `String` | ✓     | —       | —
 *
 * ⚠️ Some of this props may not be filtered by CSS-in-JS libraries (like `order`), so you may need to provide custom prop filtering.
 *
 * Related: {@link rule}, {@link boolValue}, {@link sizeValue}.
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

export const flex = createStyles({
  flex: rule('flex', sizeValue())
})
