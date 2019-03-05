import { createVariant } from '../core'

/**
 * ```js
 * import { zIndex } from 'pss'
 * ```
 *
 * prop       | css       | type                                    | value | true   | false
 * :----------|:----------|:----------------------------------------|:------|:-------|:--------
 * `zIndex`   | `z-index` | `String`, `Number`, `theme.zIndex[key]` | ✓     | —      | –
 *
 *
 * Related: {@link position}, {@link rule}, {@link boolValue}, {@link sizeValue}.
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

const zIndex = createVariant({
  prop: 'zIndex',
  cssProp: 'zIndex',
  themeKey: 'zIndex'
})

export {
  zIndex
}
