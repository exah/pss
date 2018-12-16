import { createStyles, rule } from '../core'
import { boolValue, sizeValue } from '../values'

const directionValue = sizeValue(boolValue(0, 'auto'))

/**
 * ```js
 * import { position } from 'pss'
 * ```
 *
 * prop       | css                        | type                          | value | true       | false
 * :----------|:---------------------------|:------------------------------|:------|:-----------|:--------
 * `position` | [`position`][position-url] | `String`, `Boolean`           | ✓     | —          | —
 * `left`     | `left`                     | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `right`    | `right`                    | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `top`      | `top`                      | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `bottom`   | `bottom`                   | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `zIndex`   | `z-index`                  | `String`, `Number`, `Boolean` | ✓     | `1`        | `auto`
 *
 * [position-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
 *
 * Related: {@link rule}, {@link boolValue}, {@link sizeValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { position } from 'pss'
 *
 * const Box = styled.div`
 *   ${position}
 * `
 *
 * @example
 * <Box position='absolute' top={0.2} left={0} /> // position: absolute; top: 20%; left: 0
 */

const position = createStyles({
  position: rule('position'),
  top: rule('top', directionValue),
  left: rule('left', directionValue),
  right: rule('right', directionValue),
  bottom: rule('bottom', directionValue),
  zIndex: rule('zIndex', boolValue(1, 'auto'))
})

export {
  position
}
