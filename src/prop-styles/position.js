import { createPropStyles, createRule, createSize } from '../core'

const direction = (dir) => createSize(dir, 0, 'auto')
const positionStyle = (value) => createRule('position', value, 'static')

/**
 * ```js
 * import { position } from 'pss'
 * ```
 *
 * prop       | css                        | type                          | value | true       | false
 * :----------|:---------------------------|:------------------------------|:------|:-----------|:--------
 * `position` | [`position`][position-url] | `String`, `Boolean`           | ✓     | `static`   | `static`
 * `left`     | `left`                     | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `right`    | `right`                    | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `top`      | `top`                      | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `bottom`   | `bottom`                   | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `zIndex`   | `z-index`                  | `String`, `Number`, `Boolean` | ✓     | `1`        | `auto`
 *
 *
 * [position-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
 *
 * @example
 * import { position } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Box = styled('div')(position)
 *
 * @example
 * <Box position='absolute' top={0.2} left={0} /> // position: absolute; top: 20%; left: 0
 */

const position = createPropStyles({
  position: positionStyle('static'),
  top: direction('top'),
  left: direction('left'),
  right: direction('right'),
  bottom: direction('bottom'),
  zIndex: createRule('zIndex', 1, 'auto')
})

export {
  position
}
