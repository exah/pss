import { style } from '../core'

/**
 * ```js
 * import { cursor } from 'pss'
 * ```
 *
 * prop       | css        | theme   | value | default
 * :----------|:-----------|:--------|:------|:----------
 * `cursor`   | `cursor`   | —       | ✓     | —
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
