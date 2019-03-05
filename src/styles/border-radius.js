import { BORDER_RADIUS_KEY } from '../constants'
import { createVariant } from '../core'

/**
 * ```js
 * import { borderRadius } from 'pss'
 * ```
 *
 * prop           | css             | type                                | value | true       | false
 * :--------------|:----------------|:------------------------------------|:------|:-----------|:--------
 * `borderRadius` | `border-radius` | `Number`, `theme.borderRadius[key]` | ✓     | —         | —
 *
 *
 * Related: {@link createVariant}.
 *
 * @param {Object} props
 *
 * @example
 * import { borderRadius } from 'pss'
 *
 * const Box = styled.div`
 *   ${borderRadius}
 * `
 *
 * @example
 * <Box borderRadius='5px' /> // → border-radius: 5px
 * <Box borderRadius='round' /> // → `theme.borderRadius.round` → border-radius: 9999px
 */

export const borderRadius = createVariant({
  themeKey: BORDER_RADIUS_KEY,
  prop: 'borderRadius',
  cssProp: 'borderRadius'
})
