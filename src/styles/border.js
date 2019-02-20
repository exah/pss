import { createStyles, rule } from '../core'
import { BORDER_KEY } from '../constants'
import { themeValue, colorValue } from '../values'
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
 * Set border with values from theme, created with {@link themeValue} and {@link colorValue}.
 *
 * prop           | css             | type                | value | true                           | false
 * :--------------|:----------------|:--------------------|:------|:-------------------------------|:--------
 * `borderColor`  | `border-color ` | `String`, `Boolean` | ✓     | `theme.palette.default.border` | —
 * `border`       | `border`        | `String`            | ✓     | `theme.border.default`         | —
 * `borderLeft`   | `border-left`   | `String`            | ✓     | `theme.border.default`         | —
 * `borderRight`  | `border-right`  | `String`            | ✓     | `theme.border.default`         | —
 * `borderTop`    | `border-top`    | `String`            | ✓     | `theme.border.default`         | —
 * `borderBottom` | `border-bottom` | `String`            | ✓     | `theme.border.default`         | —
 *
 *
 * Related: {@link colorValue}, {@link themeValue}, {@link rule},
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
 * // border-left: 1px dotted; border-color: red
 * <Box borderLeft='1px dotted' borderColor='red' />
 */

const border = createStyles({
  border: borderRule('border'),
  borderLeft: borderRule('borderLeft'),
  borderRight: borderRule('borderRight'),
  borderTop: borderRule('borderTop'),
  borderBottom: borderRule('borderBottom'),
  borderColor: rule('borderColor', colorValue('border'))
})

export {
  border
}
