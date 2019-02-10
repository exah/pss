import { createStyles, rule } from '../core'
import { boolValue } from '../values'

/**
 * @private
 *
 * ```js
 * import { contentAlignment } from 'pss'
 * ```
 *
 * prop             | css               | type                | value | true            | false
 * :----------------|:------------------|:--------------------|:------|:----------------|:--------
 * `alignContent`   | `align-content`   | `String`            | ✓     | —               | —
 * `justifyContent` | `justify-content` | `String`, `Boolean` | ✓     | `space-between` | `normal
 *
 * Related: {@link rule}, {@link boolValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { contentAlignment } from 'pss'
 *
 * const Grid = styled.div`
 *   display: grid;
 *   ${contentAlignment}
 * `
 *
 * @example
 * <Grid alignContent='center'>
 *   <div>1</div>
 *   <div>2</div>
 * </Grid>
 */

export const contentAlignment = createStyles({
  alignContent: rule('alignContent'),
  justifyContent: rule('justifyContent', boolValue('space-between', 'normal')) // COMPAT
})

/**
 * @private
 *
 * ```js
 * import { itemsAlignment } from 'pss'
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
 * import { itemsAlignment } from 'pss'
 *
 * const Grid = styled.div`
 *   display: grid;
 *   ${itemsAlignment}
 * `
 *
 * @example
 * <Grid alignItems='center'>
 *   <div>1</div>
 *   <div>2</div>
 * </Grid>
 */

export const itemsAlignment = createStyles({
  alignItems: rule('alignItems'),
  justifyItems: rule('justifyItems')
})

/**
 * @private
 *
 * ```js
 * import { selfAlignment } from 'pss'
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
 * import { selfAlignment } from 'pss'
 *
 * const Box = styled.div`
 *   ${selfAlignment}
 * `
 *
 * @example
 * <Grid>
 *   <Box alignSelf='center'>1</Box>
 * </Grid>
 */

export const selfAlignment = createStyles({
  justifySelf: rule('justifySelf'),
  alignSelf: rule('alignSelf')
})
