import { style } from '../core'

/**
 * ```js
 * import { zIndex } from 'pss'
 * ```
 *
 * prop       | css       | type                                    | value | true
 * :----------|:----------|:----------------------------------------|:------|:------
 * `zIndex`   | `z-index` | `String`, `Number`, `theme.zIndex[key]` | ✓     | —
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
