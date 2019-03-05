import { createStyles, rule } from '../core'
import { BORDER_KEY } from '../constants'
import { themeValue } from '../values'
import { px } from '../utils'

const borderRule = (name) => rule(name, themeValue({
  themeKey: BORDER_KEY,
  transformValue: px
}))

/**
 * ```js
 * import { border } from 'pss'
 * ```
 *
 * Set border with values from theme.
 *
 * prop           | css             | type                          | value | true                   | false
 * :--------------|:----------------|:------------------------------|:------|:-----------------------|:--------
 * `border`       | `border`        | `String`, `theme.border[key]` | ✓     | `theme.border.default` | —
 * `borderLeft`   | `border-left`   | `String`, `theme.border[key]` | ✓     | `theme.border.default` | —
 * `borderRight`  | `border-right`  | `String`, `theme.border[key]` | ✓     | `theme.border.default` | —
 * `borderTop`    | `border-top`    | `String`, `theme.border[key]` | ✓     | `theme.border.default` | —
 * `borderBottom` | `border-bottom` | `String`, `theme.border[key]` | ✓     | `theme.border.default` | —
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
 * <Box border='1px dotted red' /> // border: 1px dotted red;
 * <Box borderBottom='divider' /> // border-bottom: 1px dotted #f5f5f5;
 */

const border = createStyles({
  border: borderRule('border'),
  borderLeft: borderRule('borderLeft'),
  borderRight: borderRule('borderRight'),
  borderTop: borderRule('borderTop'),
  borderBottom: borderRule('borderBottom')
})

export {
  border
}
