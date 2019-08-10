import { style } from '../core'

/**
 * ```js
 * import { display } from 'pss'
 * ```
 *
 * prop       | css       | theme    | value    | default
 * :----------|:----------|:---------|:---------|:---------
 * `display`  | `display` | —        | ✓        | —
 *
 * Related: {@link hide}, {@link rule}.
 *
 * @param {Object} props
 *
 * @example
 * import { display } from 'pss'
 *
 * const Box = styled.div`
 *   ${display}
 * `
 *
 * @example
 * <Box display='inline-block' /> // display: inline-block;
 */

const display = style({
  cssProp: 'display'
})

export {
  display
}
