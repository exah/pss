import { style } from '../core'

/**
 * ```js
 * import { transition } from 'pss'
 * ```
 *
 * prop         | css          | theme  | value | default
 * :------------|:-------------|:-------|:------|:--------
 * `transition` | `transition` | —      | ✓     | —
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

export const transition = style({
  cssProp: 'transition'
})
