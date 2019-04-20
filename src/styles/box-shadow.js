import { style } from '../core'

/**
 * ```js
 * import { boxShadow } from 'pss'
 * ```
 *
 * prop        | css           | type      | value | true
 * :-----------|:--------------|:----------|:------|:--------------------------
 * `boxShadow` | `box-shadow`  | `String`  | ✓     | `theme.boxShadow.default`
 *
 * Related: {@link box}, {@link style}, {@link themeValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { boxShadow } from 'pss'
 *
 * const Box = styled.p`
 *   ${boxShadow}
 * `
 *
 * @example
 * <Box boxShadow='0 0 10px rgba(0, 0, 0, 0.1)' /> // → box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
 * <Box boxShadow={true} /> // → theme.boxShadow.default
 * <Box boxShadow='elevate-100' /> // → theme.boxShadow['elevate-100']
 */

export const boxShadow = style({
  cssProp: 'boxShadow',
  themeKey: 'boxShadow'
})
