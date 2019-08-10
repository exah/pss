import { style } from '../core'

/**
 * ```js
 * import { position } from 'pss'
 * ```
 *
 * prop       | css      | theme | value | default
 * :----------|:---------|:------|:------|:--------
 * `position` | position | —     | ✓     | —
 *
 * Related: {@link rule}, {@link positionOffsets}.
 *
 * @param {Object} props
 *
 * @example
 * import { position, positionOffsets } from 'pss'
 *
 * const Box = styled.div`
 *   ${position}
 *   ${positionOffsets}
 * `
 *
 * @example
 * <Box position='absolute' top={0.2} left={0} /> // position: absolute; top: 20%; left: 0
 */

const position = style({
  cssProp: 'position'
})

export {
  position
}
