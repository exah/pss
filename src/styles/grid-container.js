import { createStyles, rule } from '../core'
import { themeValue } from '../values'
import { addPrefix } from '../utils'

export const createGridContainer = (prefix) => createStyles({
  grid: rule('grid'),
  [addPrefix(prefix, 'autoFlow')]: rule('gridAutoFlow'),
  [addPrefix(prefix, 'autoRows')]: rule('gridAutoRows'),
  [addPrefix(prefix, 'autoColumns')]: rule('gridAutoColumns'),
  [addPrefix(prefix, 'template')]: rule('gridTemplate', themeValue({ themeKey: 'gridTemplate' })),
  [addPrefix(prefix, 'templateRows')]: rule('gridTemplateRows'),
  [addPrefix(prefix, 'templateColumns')]: rule('gridTemplateColumns'),
  [addPrefix(prefix, 'templateAreas')]: rule('gridTemplateAreas')
})

/**
 * ```js
 * import { gridContainer } from 'pss'
 * ```
 *
 * [Grid Layout Container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) styles.
 *
 * prop                  | css                     | theme          | value | default
 * :------------------ --|:------------------------|:---------------|:------|:-------
 * `grid`                | `grid`                  | —              | ✓     | —
 * `gridAutoFlow`        | `grid-auto-flow`        | —              | ✓     | —
 * `gridAutoColumns`     | `grid-auto-columns`     | —              | ✓     | —
 * `gridAutoRows`        | `grid-auto-rows`        | —              | ✓     | —
 * `gridTemplate`        | `grid-template`         | `gridTemplate` | ✓     | `theme.gridTemplate.default`
 * `gridTemplateColumns` | `grid-template-columns` | —              | ✓     | —
 * `gridTemplateRows`    | `grid-template-rows`    | —              | ✓     | —
 * `gridTemplateAreas`   | `grid-template-areas`   | —              | ✓     | —
 *
 * Related: {@link gap}, {@link flex}, {@link rule}
 *
 * @param {Object} props
 *
 * @example
 * import { gridContainer } from 'pss'
 *
 * const Grid = styled.div`
 *   display: grid;
 *   ${gridContainer}
 * `
 *
 * @example
 * <Grid gridTemplateColumns='repeat(12, 1fr)'> // display: grid; grid-template-columns: repeat(12, 1fr)
 *   <div>1</div>
 *   <div>2</div>
 * </Grid>
 */

export const gridContainer = createGridContainer('grid')
