import { style } from '../core'

/**
 * ```js
 * import { borderRadius } from 'pss'
 * ```
 *
 * prop           | css             | theme          | value | default
 * :--------------|:----------------|:---------------|:------|:---------------------------
 * `borderRadius` | `border-radius` | `borderRadius` | ✓     | `theme.borderRadius.default`
 *
 *
 * Related: {@link style}.
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

export const borderRadius = style({
  themeKey: 'borderRadius',
  cssProp: 'borderRadius'
})
