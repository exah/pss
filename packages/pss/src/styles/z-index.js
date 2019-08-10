import { style } from '../core'

/**
 * ```js
 * import { zIndex } from 'pss'
 * ```
 *
 * prop       | css       | theme    | value | default
 * :----------|:----------|:---------|:------|:------
 * `zIndex`   | `z-index` | `zIndex` | ✓     | —
 *
 *
 * Related: {@link position}, {@link rule}, {@link style}.
 *
 * @param {Object} props
 *
 * @example
 * import { zIndex } from 'pss'
 *
 * const Box = styled.div`
 *   position: relative;
 *   ${zIndex}
 * `
 *
 * @example
 * <Box zIndex={10} /> // position: relative; z-index: 10;
 * <Box zIndex='modal' /> // position: relative; z-index: 100;
 */

const zIndex = style({
  cssProp: 'zIndex',
  themeKey: 'zIndex'
})

export {
  zIndex
}
