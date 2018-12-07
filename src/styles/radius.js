import { RADIUS_KEY } from '../constants'
import { createPropStyles, rule } from '../core'
import { themeValue } from '../values'

/**
 * ```js
 * import { radius } from 'pss'
 * ```
 *
 * prop         | css             | type                 | value | true       | false
 * :------------|:----------------|:---------------------|:------|:-----------|:--------
 * `radius`     | `border-radius` | `Number`             | ✓     | —         | —
 *
 * ⚠️ This prop may not be filtered by CSS-in-JS libraries, so you may need to provide custom prop filtering.
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

export const radius = createPropStyles({
  radius: rule('borderRadius', themeValue({
    themeKey: RADIUS_KEY,
    transformValue: (value, input) => value || input
  }))
})
