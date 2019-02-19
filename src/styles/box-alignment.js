import { createStyles, rule } from '../core'

/**
 * ```js
 * import { boxContentAlignment } from 'pss'
 * ```
 *
 * prop             | css               | type     | value | true            | false
 * :----------------|:------------------|:---------|:------|:----------------|:--------
 * `alignContent`   | `align-content`   | `String` | ✓     | —               | —
 * `justifyContent` | `justify-content` | `String` | ✓     | — | —
 *
 * Related: {@link rule}, {@link boolValue}.
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
  alignContent: rule('alignContent'),
  justifyContent: rule('justifyContent')
})

/**
 * ```js
 * import { boxItemsAlignment } from 'pss'
 * ```
 *
 * prop             | css               | type      | value | true  | false
 * :----------------|:------------------|:----------|:------|:------|:--------
 * `alignItems`     | `align-items`     | `String`  | ✓     | —     | —
 * `justifyItems`   | `justify-items`   | `String`  | ✓     | —     | —
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
  alignItems: rule('alignItems'),
  justifyItems: rule('justifyItems')
})

/**
 * ```js
 * import { boxSelfAlignment } from 'pss'
 * ```
 *
 * prop          | css            | type      | value | true    | false
 * :-------------|:---------------|:----------|:------|:--------|:--------
 * `alignSelf`   | `align-self`   | `String`  | ✓     | —       | —
 * `justifySelf` | `justify-self` | `String`  | ✓     | —       | —
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
  justifySelf: rule('justifySelf'),
  alignSelf: rule('alignSelf')
})
