import { rule } from '../core'
import { themeValue } from '../values'
import { directionStyles } from '../.internal'
import { px } from '../utils'

const borderRule = (name) => rule(name, themeValue({
  themeKey: 'border',
  transformValue: px
}))

/**
 * ```js
 * import { border } from 'pss'
 * ```
 *
 * Set border with values from theme.
 *
 * prop           | css            | theme    | value | default
 * :--------------|:---------------|:---------|:------|:----------------------
 * `border`       | `border`       | `border` | ✓     | `theme.border.default`
 * `borderLeft`   | `border-left`  | `border` | ✓     | `theme.border.default`
 * `borderRight`  | `border-right` | `border` | ✓     | `theme.border.default`
 * `borderTop`    | `border-top`   | `border` | ✓     | `theme.border.default`
 * `borderBottom` | `border-bottom`| `border` | ✓     | `theme.border.default`
 *
 *
 * Related: {@link themeValue}, {@link rule},
 *
 * @param {Object} props
 *
 * @example
 * import { border } from 'pss'
 *
 * const Box = styled.div`
 *   ${border}
 * `
 *
 * @example
 * <Box border='1px dotted red' /> // → border: 1px dotted red
 * <Box borderBottom='divider' /> // → theme.border.divider // → border-bottom: 1px dotted #f5f5f5
 */

const border = directionStyles({
  cssProp: 'border',
  rule: borderRule
})

export {
  border
}
