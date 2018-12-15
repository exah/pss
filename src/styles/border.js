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
 * Set border with values from theme, created with {@link sizeValue} and {@link colorValue}.
 *
 * prop       | css            | type                | value | true            | false
 * :----------|:---------------|:--------------------|:------|:----------------|:--------
 * `bdc`      | `border-color` | String              | ✓     | Default color** | —
 * `bd{dir}`* | `border-{dir}` <br /> `border-{dir}` | `Number`, `Boolean`, `String` | ✓ | `1px` <br /> `solid` | `0px` <br /> `none`
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
 * \** Default color:
 *
 * `theme.palette[theme.default.palette].border`
 *
 *
 * @example
 * import { border } from 'pss'
 *
 * const Box = styled.div`
 *   ${border}
 * `
 *
 * @example
 * // border-width: 1px; border-style: solid; border-color: #eee
 * <Box bd bdc />
 *
 * // border-left-width: 1px; border-left-style: dotted; border-color: red
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
