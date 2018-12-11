import { createPropStyles, rule } from '../core'

/**
 * ```js
 * import { transform } from 'pss'
 * ```
 *
 * prop         | css             | type                 | value | true       | false
 * :------------|:----------------|:---------------------|:------|:-----------|:--------
 * `transform` | `transform`      | `String`             | ✓     | —         | —
 *
 * ⚠️ This prop may not be filtered by CSS-in-JS libraries, so you may need to provide custom prop filtering.
 *
 * @example
 * import { transform } from 'pss'
 *
 * const Box = styled.div`
 *   ${transform}
 * `
 *
 * @example
 * <Box transform='rotate(90deg)' /> // → transform: rotate(90deg)
 */

export const transform = createPropStyles({
  transform: rule('transform')
})