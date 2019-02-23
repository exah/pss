import { RADIUS_KEY } from '../constants'
import { createVariant } from '../core'

/**
 * ```js
 * import { radius } from 'pss'
 * ```
 *
 * prop         | css             | type                 | value | true       | false
 * :------------|:----------------|:---------------------|:------|:-----------|:--------
 * `radius`     | `border-radius` | `Number`             | ✓     | —         | —
 *
 *
 * Related: {@link createVariant}.
 *
 * @param {Object} props
 *
 * @example
 * import { radius } from 'pss'
 *
 * const Box = styled.div`
 *   ${radius}
 * `
 *
 * @example
 * <Box radius='5px' /> // → border-radius: 5px
 * <Box radius='round' /> // → `theme.radius.round` → border-radius: 9999px
 */

export const radius = createVariant({
  themeKey: RADIUS_KEY,
  prop: 'radius',
  cssProp: 'borderRadius'
})
