import { createStyles, combineStyles, rule } from '../core'
import { contentAlignment, itemsAlignment, selfAlignment } from './alignment'
import { order } from './order'
import { addPrefix } from '../utils'

export const createGridStyle = (prefix) => createStyles({
  [addPrefix('autoFlow', prefix)]: rule('gridAutoFlow'),
  [addPrefix('autoCols', prefix)]: rule('gridAutoColumns'),
  [addPrefix('autoRows', prefix)]: rule('gridAutoRows'),
  [addPrefix('templateCols', prefix)]: rule('gridTemplateColumns'),
  [addPrefix('templateRows', prefix)]: rule('gridTemplateRows'),
  [addPrefix('templateAreas', prefix)]: rule('gridTemplateAreas')
})

export const createGridItemStyle = (prefix) => createStyles({
  [addPrefix('col', prefix)]: rule('gridCol'),
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
 * prop                | css                     | type      | value | true   | false
 * :------------------ |:------------------------|:----------|:------|:-------|:--------
 * `gridAutoFlow`      | `grid-auto-flow`        | `String`  | ✓     | —      | —
 * `gridAutoCols`      | `grid-auto-cols`        | `String`  | ✓     | —      | —
 * `gridAutoRows`      | `grid-auto-rows`        | `String`  | ✓     | —      | —
 * `gridTemplateCols`  | `grid-template-columns` | `String`  | ✓     | —      | —
 * `gridTemplateRows`  | `grid-template-rows`    | `String`  | ✓     | —      | —
 * `gridTemplateAreas` | `grid-template-areas`   | `String`  | ✓     | —      | —
 * `alignItems`        | `align-items`           | `String`  | ✓     | —      | —
 * `justifyItems`      | `justify-items`         | `String`  | ✓     | —      | —
 * `alignContent`      | `align-content`         | `String`  | ✓     | —      | —
 * `justifyContent`    | `justify-content`       | `String`  | ✓     | —      | —
 *
 * Related: {@link rule}, {@link boolValue}.
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
 * <Grid>
 *   <div>1</div>
 *   <div>2</div>
 * </Grid>
 */

export const grid = combineStyles(
  createGridStyle('grid'),
  contentAlignment, // COMPAT
  itemsAlignment // COMPAT
)

/**
 * ```js
 * import { gridItem } from 'pss'
 * ```
 *
 * prop          | css            | type                 | value | true    | false
 * :-------------|:---------------|:---------------------|:------|:------- |:--------
 * `gridColumn`  | `grid-column`  | `String`             | ✓     | —       | —
 * `gridRow`     | `grid-row`     | `String`             | ✓     | —       | —
 * `gridArea`    | `grod-area`    | `String`             | ✓     | —       | —
 * `justifySelf` | `justify-self` | `String`             | ✓     | —       | —
 * `alignSelf`   | `align-self`   | `String`             | ✓     | —       | —
 * `order`       | `order`        | `Number`, `Boolean`  | ✓     | `1`     | `0`
 *
 * Related: {@link rule}, {@link boolValue}, {@link sizeValue}.
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
 *   <GridItem>2</GridItem>
 *   <GridItem>1</GridItem>
 * </Grid>
 */

export const gridItem = combineStyles(
  createGridItemStyle('grid'),
  selfAlignment, // COMPAT
  order // COMPAT
)
