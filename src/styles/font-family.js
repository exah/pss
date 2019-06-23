import { style } from '../core'

/**
 * ```js
 * import { fontFamily } from 'pss'
 * ```
 * prop         | css           | theme        | value | default
 * :------------|:--------------|:-------------|:------|:----------------------
 * `fontFamily` | `font-family` | `fontFamily` | ✓     | `theme.fontFamily.default`
 *
 * Related: {@link text}, {@link ellipsis}, {@link rule}, {@link themeValue}.
 *
 * Set `font-family` from `theme`:
 *
 * ```js
 * const theme = {
 *   default: {
 *     fontFamily: 'ui' // this can be changed in runtime, default to `default`
 *   },
 *   fontFamily: {
 *     heading: 'Times',
 *     ui: 'Helvetica'
 *   }
 * }
 * ```
 *
 * Related: {@link style}.
 *
 * @param {Object} props
 *
 * @example
 * import { fontFamily } from 'pss'
 *
 * const Text = styled.p`
 *   ${fontFamily}
 * `
 *
 * @example
 * <Text fontFamily /> // → font-family: Helvetica
 * <Text fontFamily='auto' /> // → font-family: Helvetica
 * <Text fontFamily='ui' /> // → font-family: Helvetica
 * <Text fontFamily='heading' /> // → font-family: Times
 * <Text fontFamily='Comic Sans' /> // → font-family: Comic Sans
 */

const fontFamily = style({
  themeKey: 'fontFamily',
  cssProp: 'fontFamily'
})

export {
  fontFamily
}
