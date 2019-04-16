import { createStyles, rule } from '../core'
import { addPrefix } from '../utils'

export const createGridStyle = ({
  prefix,
  isShortPropNames = false
} = {}) => createStyles({
  [addPrefix('autoFlow', prefix)]: rule('gridAutoFlow'),
  [addPrefix('autoRows', prefix)]: rule('gridAutoRows'),
  [addPrefix(isShortPropNames ? 'autoCols' : 'autoColumns', prefix)]: rule('gridAutoColumns'),
  [addPrefix('templateRows', prefix)]: rule('gridTemplateRows'),
  [addPrefix(isShortPropNames ? 'templateCols' : 'templateColumns', prefix)]: rule('gridTemplateColumns'),
  [addPrefix('templateAreas', prefix)]: rule('gridTemplateAreas')
})

export const createGridItemStyle = ({
  prefix,
  isShortPropNames = false
} = {}) => createStyles({
  [addPrefix(isShortPropNames ? 'col' : 'column', prefix)]: rule('gridColumn'),
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
 * prop                  | css                     | type      | value | true   | false
 * :------------------ --|:------------------------|:----------|:------|:-------|:--------
 * `gridAutoFlow`        | `grid-auto-flow`        | `String`  | ✓     | —      | —
 * `gridAutoColumns`     | `grid-auto-columns`     | `String`  | ✓     | —      | —
 * `gridAutoRows`        | `grid-auto-rows`        | `String`  | ✓     | —      | —
 * `gridTemplateColumns` | `grid-template-columns` | `String`  | ✓     | —      | —
 * `gridTemplateRows`    | `grid-template-rows`    | `String`  | ✓     | —      | —
 * `gridTemplateAreas`   | `grid-template-areas`   | `String`  | ✓     | —      | —
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
 * prop          | css            | type     | value | true    | false
 * :-------------|:---------------|:---------|:------|:------- |:--------
 * `gridColumn`  | `grid-column`  | `String` | ✓     | —       | —
 * `gridRow`     | `grid-row`     | `String` | ✓     | —       | —
 * `gridArea`    | `grod-area`    | `String` | ✓     | —       | —
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
