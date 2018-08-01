import { createPropStyles, ruleProp } from '../core'
import { isBool } from '../utils/is'

const randomHexColor = () =>
  '#' + (Math.random() * 0xFFFFFF << 0).toString(16)

/**
 * Alias **`utility`**
 *
 * ```js
 * import { utility } from 'pss'
 * ```
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

const utilityPropStyles = createPropStyles({
  cursor: ruleProp('cursor'),
  opacity: (val) => ({ opacity: isBool(val) ? val ? 1 : 0 : val }),
  radius: ruleProp('borderRadius'),
  outline: (val) => ({ outline: val === 'debug' ? randomHexColor() : val }),
  transform: ruleProp('transform'),
  transition: ruleProp('transition', 'all .3s', 'none')
})

export {
  utilityPropStyles
}
