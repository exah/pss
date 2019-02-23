import { createStyles, rule } from '../core'

/**
 * ```js
 * import { opacity } from 'pss'
 * ```
 *
 * prop         | css             | type    | value | true     | false
 * :------------|:----------------|:------- |:------|:---------|:--------
 * `opacity`    | `opacity`       | `0...1` | ✓     | —        | —
 *
 * Related: {@link rule}, {@link boolValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { opacity } from 'pss'
 *
 * const Box = styled.div`
 *   ${opacity}
 * `
 *
 * @example
 * <Box opacity='1' /> // → opacity: 1
 * <Box opacity={0.5} /> // → opacity: 0.5
 */

export const opacity = createStyles({
  opacity: rule('opacity')
})
