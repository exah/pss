import { createStyles, rule } from '../core'
import { themeValue } from '../values'
import { px } from '../utils'

const borderRule = (name) => rule(name, themeValue({
  themeKey: 'border',
  transformValue: px
}))

/**
 * ```js
 * import { borders } from 'pss'
 * ```
 *
 * Set borders with values from theme.
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
 * import { borders } from 'pss'
 *
 * const Box = styled.div`
 *   ${borders}
 * `
 *
 * @example
 * <Box border='1px dotted red' /> // border: 1px dotted red;
 * <Box borderBottom='divider' /> // border-bottom: 1px dotted #f5f5f5;
 */

const borders = createStyles({
  border: borderRule('border'),
  borderLeft: borderRule('borderLeft'),
  borderRight: borderRule('borderRight'),
  borderTop: borderRule('borderTop'),
  borderBottom: borderRule('borderBottom')
})

export {
  borders
}
