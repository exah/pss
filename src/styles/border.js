import { createStyles, rule } from '../core'
import { BORDER_KEY } from '../constants'
import { themeValue, colorValue } from '../values'
import { px } from '../utils'

const sizeRule = (name) => rule(name, themeValue({
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
 * prop       | css            | type                | value | true                   | false
 * :----------|:---------------|:--------------------|:------|:-----------------------|:--------
 * `bdc`      | `border-color` | `String`, `Boolean` | ✓     | `theme.palette.default.border` | —
 * `bd{dir}`* | `border-{dir}` | `String`            | ✓     | `theme.border.default` | —
 *
 * \* Directions:
 *
 * - `l` → `left`
 * - `r` → `right`
 * - `t` → `top`
 * - `b` → `bottom`
 * - `x` → `left`, `right`
 * - `y` → `top`, `bottom`
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
 * <Box bdl='1px dotted' bdc='red' />
 */

const border = createStyles({
  bd: sizeRule('border'),
  bdl: sizeRule('borderLeft'),
  bdr: sizeRule('borderRight'),
  bdt: sizeRule('borderTop'),
  bdb: sizeRule('borderBottom'),
  bdx: [ sizeRule('borderLeft'), sizeRule('borderRight') ],
  bdy: [ sizeRule('borderTop'), sizeRule('borderBottom') ],
  bdc: rule('borderColor', colorValue('border'))
})

export {
  border
}
