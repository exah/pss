import { createStyles, rule } from '../core'
import { addPrefix } from '../utils'

export const createGridItem = (prefix) => createStyles({
  [addPrefix(prefix, 'column')]: rule('gridColumn'),
  [addPrefix(prefix, 'row')]: rule('gridRow'),
  [addPrefix(prefix, 'area')]: rule('gridArea')
})

/**
 * ```js
 * import { gridItem } from 'pss'
 * ```
 *
 * prop          | css            | theme    | value | default
 * :-------------|:---------------|:---------|:------|:-------
 * `gridColumn`  | `grid-column`  | —        | ✓     | —
 * `gridRow`     | `grid-row`     | —        | ✓     | —
 * `gridArea`    | `grod-area`    | —        | ✓     | —
 *
 * Related: {@link rule}, {@link sizeValue}.
 *
 * @example
 * import { gridItem } from 'pss'
 *
 * const GridItem = styled.div`
 *   ${gridItem}
 * `
 *
 * @example
 * <Grid> // display: grid
 *   <GridItem gridRow='1' girdColumn='2'>1</GridItem>
 *   <GridItem gridRow='2' gridColumn='1'>2</GridItem>
 * </Grid>
 */

export const gridItem = createGridItem('grid')
