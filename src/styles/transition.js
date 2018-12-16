import { createStyles, rule } from '../core'

/**
 * ```js
 * import { transition } from 'pss'
 * ```
 *
 * prop         | css             | type                 | value | true       | false
 * :------------|:----------------|:---------------------|:------|:-----------|:--------
 * `transition` | `transition`    | `String`             | ✓     | —         | —
 *
 *
 * Related: {@link rule}.
 *
 * @param {Object} props
 *
 * @example
 * import { transition } from 'pss'
 *
 * const Box = styled.div`
 *   ${transition}
 * `
 *
 * @example
 * <Box transition='all .3s' /> // → transition: all .3s
 */

export const transition = createStyles({
  transition: rule('transition')
})
