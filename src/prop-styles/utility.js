import { createPropStyles, experimentalCreateRule } from '../core'
import { boolValue } from '../value'

const randomHexColor = () =>
  '#' + (Math.random() * 0xFFFFFF << 0).toString(16)

/**
 * ```js
 * import { utility } from 'pss'
 * ```
 *
 * ⚠️ Some of this props may not be filtered by CSS-in-JS libraries (like `opacity`), so you may need to provide custom prop filtering.
 *
 * prop         | css             | type                 | value | true       | false
 * :------------|:----------------|:---------------------|:------|:-----------|:--------
 * `opacity`    | `opacity`       | `0...1`, `Boolean`   | ✓     | `1`       | `0`
 * `radius`     | `border-radius` | `Number`             | ✓     | —         | —
 * `transform`  | `transform`     | `String`             | ✓     | —         | —
 * `transition` | `transition`    | `String`, `Boolean`  | ✓     | `all .3s` | `none`
 * `outline`    | `outline`       | `String`, `'debug'`* | ✓     | —         | —
 * `cursor`     | `cursor`        | `String`             | ✓     | —         | —
 *
 * \* Random hex color, useful for debugging layout
 *
 * @example
 * import { utility } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Box = styled('div')(utility)
 *
 * @example
 * <Box opacity={0.4} /> // opacity: 0.4
 */

const utility = createPropStyles({
  cursor: experimentalCreateRule('cursor'),
  opacity: experimentalCreateRule('opacity', boolValue(1, 0)),
  radius: experimentalCreateRule('borderRadius'),
  outline: experimentalCreateRule('outline', (val) => val === 'debug' ? `1px solid ${randomHexColor()}` : val),
  transform: experimentalCreateRule('transform'),
  transition: experimentalCreateRule('transition', boolValue('all .3s', 'none'))
})

export {
  utility
}
