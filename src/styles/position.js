import { createStyles, rule } from '../core'

/**
 * ```js
 * import { position } from 'pss'
 * ```
 *
 * prop       | css                        | type      | value | true    | false
 * :----------|:---------------------------|:----------|:------|:--------|:--------
 * `position` | [`position`][position-url] | `String`  | ✓     | —       | —
 *
 * [position-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
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

const position = createStyles({
  position: rule('position')
})

export {
  position
}
