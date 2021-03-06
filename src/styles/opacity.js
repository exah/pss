import { style } from '../core'

/**
 * ```js
 * import { opacity } from 'pss'
 * ```
 *
 * prop         | css        | theme   | value   | default
 * :------------|:-----------|:------- |:--------|:---------
 * `opacity`    | `opacity`  | —       | `0...1` | —
 *
 * Related: {@link rule}.
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

export const opacity = style({
  cssProp: 'opacity'
})
