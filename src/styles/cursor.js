import { style } from '../core'

/**
 * ```js
 * import { cursor } from 'pss'
 * ```
 *
 * prop         | css             | type                 | value | true
 * :------------|:----------------|:---------------------|:------|:----------
 * `cursor`     | `cursor`        | `String`             | ✓     | —
 *
 * Related: {@link style}.
 *
 * @param {Object} props
 *
 * @example
 * import { cursor } from 'pss'
 *
 * const Box = styled.div`
 *   ${cursor}
 * `
 *
 * @example
 * <Box cursor='pointer' /> // → cursor: pointer
 */

export const cursor = style({
  cssProp: 'cursor'
})
