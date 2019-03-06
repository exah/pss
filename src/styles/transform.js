import { style } from '../core'

/**
 * ```js
 * import { transform } from 'pss'
 * ```
 *
 * prop         | css             | type                 | value | true       | false
 * :------------|:----------------|:---------------------|:------|:-----------|:--------
 * `transform` | `transform`      | `String`             | ✓     | —         | —
 *
 * Related: {@link rule}.
 *
 * @param {Object} props
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

export const transform = style({
  cssProp: 'transform'
})
