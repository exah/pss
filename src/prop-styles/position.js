import { createPropStyles, ruleProp, sizeProp } from '../core'

const direction = (dir) => sizeProp(dir, 0, 'auto')
const positionStyle = (value) => ruleProp('position', value, 'static')

/**
 * Alias **`positionPropStyles`**
 *
 * ```js
 * import { position } from 'pss'
 * ```
 *
 * prop       | css                        | type                          | value | true       | false
 * :----------|:---------------------------|:------------------------------|:------|:-----------|:--------
 * `position` | [`position`][position-url] | `String`, `Boolean`           | ✓     | `static`   | `static`
 * `pst`      | `position`                 | `true`                        | —     | `static`   | —
 * `prl`      | `position`                 | `true`                        | —     | `relative` | —
 * `pab`      | `position`                 | `true`                        | —     | `absolute` | —
 * `pfx`      | `position`                 | `true`                        | —     | `fixed`    | —
 * `psy`      | `position`                 | `true`                        | —     | `sticky`   | —
 * `l`        | `left`                     | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `r`        | `right`                    | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `t`        | `top`                      | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `b`        | `bottom`                   | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `zi`       | `z-index`                  | `String`, `Number`, `Boolean` | ✓     | `1`        | `auto`
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
 * <Box pab t={0.2} l={0} /> // position: absolute; top: 20%; left: 0
 */

const position = createPropStyles({
  position: positionStyle('static'),
  pst: positionStyle('static'),
  prl: positionStyle('relative'),
  pab: positionStyle('absolute'),
  pfx: positionStyle('fixed'),
  psy: positionStyle('sticky'),
  l: direction('left'),
  r: direction('right'),
  t: direction('top'),
  b: direction('bottom'),
  zi: ruleProp('zIndex', 1, 'auto')
})

export {
  position
}
