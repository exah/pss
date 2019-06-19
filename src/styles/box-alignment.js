import { createStyles } from '../core'

/**
 * ```js
 * import { boxContentAlignment } from 'pss'
 * ```
 *
 * prop             | css               | theme   | value | default
 * :----------------|:------------------|:--------|:------|:--------
 * `alignContent`   | `align-content`   | —       | ✓     | —
 * `justifyContent` | `justify-content` | —       | ✓     | —
 *
 * Related: {@link rule}
 *
 * @param {Object} props
 *
 * @example
 * import { boxContentAlignment } from 'pss'
 *
 * const Grid = styled.div`
 *   display: grid;
 *   ${boxContentAlignment}
 * `
 *
 * @example
 * <Grid alignContent='center'>
 *   <div>1</div>
 *   <div>2</div>
 * </Grid>
 */

export const boxContentAlignment = createStyles({
  alignContent: true,
  justifyContent: true
})

/**
 * ```js
 * import { boxItemsAlignment } from 'pss'
 * ```
 *
 * prop             | css               | theme | value | default
 * :----------------|:------------------|:------|:------|:------
 * `alignItems`     | `align-items`     | —     | ✓     | —
 * `justifyItems`   | `justify-items`   | —     | ✓     | —
 *
 * Related: {@link rule}
 *
 * @param {Object} props
 *
 * @example
 * import { boxItemsAlignment } from 'pss'
 *
 * const Grid = styled.div`
 *   display: grid;
 *   ${boxItemsAlignment}
 * `
 *
 * @example
 * <Grid alignItems='center'>
 *   <div>1</div>
 *   <div>2</div>
 * </Grid>
 */

export const boxItemsAlignment = createStyles({
  alignItems: true,
  justifyItems: true
})

/**
 * ```js
 * import { boxSelfAlignment } from 'pss'
 * ```
 *
 * prop          | css            | theme     | value | default
 * :-------------|:---------------|:----------|:------|:--------
 * `alignSelf`   | `align-self`   | —         | ✓     | —
 * `justifySelf` | `justify-self` | —         | ✓     | —
 *
 * Related: {@link rule}
 *
 * @param {Object} props
 *
 * @example
 * import { boxSelfAlignment } from 'pss'
 *
 * const Box = styled.div`
 *   ${boxSelfAlignment}
 * `
 *
 * @example
 * <Grid>
 *   <Box alignSelf='center'>1</Box>
 * </Grid>
 */

export const boxSelfAlignment = createStyles({
  justifySelf: true,
  alignSelf: true
})
