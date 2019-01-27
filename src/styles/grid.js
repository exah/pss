import { createStyles, combineStyles, rule } from '../core'
import { boolValue } from '../values'
import { order } from './order'

/**
 * ```js
 * import { grid } from 'pss'
 * ```
 *
 * prop             | css               | type                | value | true            | false
 * :----------------|:----------------- |:--------------------|:------|:----------------|:--------
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

export const grid = createStyles({
  gridAutoFlow: rule('gridAutoFlow'),
  gridAutoCols: rule('gridAutoColumns'),
  gridAutoRows: rule('gridAutoRows'),

  gridTemplateColumns: rule('gridTemplateColumns'),
  gridTemplateRows: rule('gridTemplateRows'),
  gridTemplateAreas: rule('gridTemplateAreas'),

  placeItems: rule('placeItems'),
  alignItems: rule('alignItems'),
  justifyItems: rule('justifyItems'),

  placeContent: rule('placeContent'),
  alignContent: rule('alignContent'),
  justifyContent: rule('justifyContent', boolValue('space-between', 'normal'))
})

/**
 * ```js
 * import { gridItem } from 'pss'
 * ```
 *
 * prop        | css           | type                 | value | true    | false
 * :-----------|:--------------|:---------------------|:------|:------- |:--------
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
  createStyles({
    gridColumn: rule('gridColumn'),
    gridRow: rule('gridRow'),
    gridArea: rule('gridArea'),
    placeSelf: rule('placeSelf'), // COMPAT
    justifySelf: rule('justifySelf'), // COMPAT
    alignSelf: rule('alignSelf') // COMPAT
  }),
  order // COMPAT
)
