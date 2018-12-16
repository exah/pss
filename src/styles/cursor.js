import { createStyles, rule } from '../core'

/**
 * ```js
 * import { cursor } from 'pss'
 * ```
 *
 * prop         | css             | type                 | value | true       | false
 * :------------|:----------------|:---------------------|:------|:-----------|:--------
 * `cursor`     | `cursor`        | `String`             | ✓     | —         | —
 *
 * ⚠️ This prop may not be filtered by CSS-in-JS libraries, so you may need to provide custom prop filtering.
 *
 * Related: {@link rule}.
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

export const cursor = createStyles({
  cursor: rule('cursor')
})
