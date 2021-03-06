import { createStyles } from '../core'
import { spaceRule } from '../.internal'

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
 * <Grid gap={1}> // grid-gap: 4px; gap: 4px
 *  <div>1</div>
 *  <div>2</div>
 * </Grid>
 */

export const gap = createStyles({
  gap: [ spaceRule('gridGap'), spaceRule('gap') ],
  columnGap: [ spaceRule('gridColumnGap'), spaceRule('columnGap') ],
  rowGap: [ spaceRule('gridRowGap'), spaceRule('rowGap') ]
})
