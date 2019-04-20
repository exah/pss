import { createStyles } from '../core'
import { spaceRule } from '../rules'

/**
 * ```js
 * import { gap } from 'pss'
 * ```
 *
 * Same as {@link space} but for {@link grid} and {@link flex}.
 *
 * **Component props:**
 *
 * - `gap` → `grid-gap`, `gap`
 * - `columnGap` → `grid-column-gap`, `column-gap`
 * - `rowGap` → `grid-row-gap`, `row-gap`
 *
 * @param {Object} props
 *
 * @example
 * import { gap } from 'pss'
 *
 * const Grid = styled.div`
 *   display: grid;
 *   ${gap}
 * `
 *
 * @example
 * <Grid gap={1}> // grid-gap: 8px; gap: 8px
 *  <div>1</div>
 *  <div>2</div>
 * </Grid>
 */

export const gap = createStyles({
  gap: [ spaceRule('gridGap'), spaceRule('gap') ],
  columnGap: [ spaceRule('gridColumnGap'), spaceRule('columnGap') ],
  rowGap: [ spaceRule('gridRowGap'), spaceRule('rowGap') ]
})
