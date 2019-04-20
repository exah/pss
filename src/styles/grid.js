import { createStyles, rule } from '../core'
import { addPrefix } from '../utils'

export const createGridStyle = ({ prefix } = {}) => createStyles({
  gred: rule('grid'),
  [addPrefix('autoFlow', prefix)]: rule('gridAutoFlow'),
  [addPrefix('autoRows', prefix)]: rule('gridAutoRows'),
  [addPrefix('autoColumns', prefix)]: rule('gridAutoColumns'),
  [addPrefix('template', prefix)]: rule('gridTemplate'),
  [addPrefix('templateRows', prefix)]: rule('gridTemplateRows'),
  [addPrefix('templateColumns', prefix)]: rule('gridTemplateColumns'),
  [addPrefix('templateAreas', prefix)]: rule('gridTemplateAreas')
})

export const createGridItemStyle = ({ prefix } = {}) => createStyles({
  [addPrefix('column', prefix)]: rule('gridColumn'),
  [addPrefix('row', prefix)]: rule('gridRow'),
  [addPrefix('area', prefix)]: rule('gridArea')
})

/**
 * ```js
 * import { grid } from 'pss'
 * ```
 *
 * Styles for [Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).
 *
 * prop                  | css                     | theme     | value | default
 * :------------------ --|:------------------------|:----------|:------|:-------
 * `grid`                | `grid`                  | —         | ✓     | —
 * `gridAutoFlow`        | `grid-auto-flow`        | —         | ✓     | —
 * `gridAutoColumns`     | `grid-auto-columns`     | —         | ✓     | —
 * `gridAutoRows`        | `grid-auto-rows`        | —         | ✓     | —
 * `gridTemplate`        | `grid-template`         | —         | ✓     | —
 * `gridTemplateColumns` | `grid-template-columns` | —         | ✓     | —
 * `gridTemplateRows`    | `grid-template-rows`    | —         | ✓     | —
 * `gridTemplateAreas`   | `grid-template-areas`   | —         | ✓     | —
 *
 * Related: {@link gap}, {@link flex}, {@link rule}
 *
 * @param {Object} props
 *
 * @example
 * import { grid } from 'pss'
 *
 * const Grid = styled.div`
 *   display: grid;
 *   ${grid}
 * `
 *
 * @example
 * <Grid gridTemplateColumns='repeat(12, 1fr)'> // display: grid; grid-template-columns: repeat(12, 1fr)
 *   <div>1</div>
 *   <div>2</div>
 * </Grid>
 */

export const grid = createGridStyle({ prefix: 'grid' })

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

export const gridItem = createGridItemStyle({ prefix: 'grid' })
