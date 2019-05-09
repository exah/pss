import { style } from '../core'

/**
 * ```js
 * import { background } from 'pss'
 * ```
 *
 * prop         | css          | theme    | value  | default
 * :------------|:-------------|:---------|:-------|:-----------------
 * `background` | `background` | —        | ✓      | —
 *
 *
 * Related: {@link box}, {@link style}.
 *
 * @param {Object} props
 *
 * @example
 * import { background } from 'pss'
 *
 * const Box = styled.div`
 *   ${background}
 * `
 *
 * @example
 * <Box background='center / cover url(http://placekitten.com/500)' />
 * // → background: center / cover url(http://placekitten.com/500)
 *
 * <Box background='radial-gradient(crimson, skyblue)' />
 * // → background: radial-gradient(crimson, skyblue)
 *
 * <Box background='#ff0000' />
 * // → background: #ff0000
 */

export const background = style({
  cssProp: 'background'
})
