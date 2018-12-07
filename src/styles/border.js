import { isNum, isStr, isBool, isArr } from '@exah/utils'
import { createPropStyles, rule } from '../core'
import { colorValue, sizeValue, boolValue } from '../values'
import { px } from '../utils'

const borderRule = (Dir = '') => {
  const widthCssProp = `border${Dir}Width`
  const styleCssProp = `border${Dir}Style`
  const getValue = sizeValue(boolValue(1, 0))
  const returnValue = (value, props) => px(getValue(value, props)(props))

  return (value, props) => {
    if (isBool(value) || isNum(value)) {
      return {
        [widthCssProp]: returnValue(value, props),
        [styleCssProp]: value ? 'solid' : 'none'
      }
    } else if (isStr(value) || isArr(value)) {
      // '5px dotted' -> [ '5px', 'dotted' ]
      const [ parsedWidth, style = 'solid' ] = value.toString().split(/,|\s+/g)

      return {
        [widthCssProp]: returnValue(parsedWidth, props),
        [styleCssProp]: style
      }
    }

    return {}
  }
}

/**
 * ```js
 * import { border } from 'pss'
 * ```
 *
 * Set border with values from theme, created with {@link sizeValue} and {@link colorValue}.
 *
 * prop       | css            | type                | value | true            | false
 * :----------|:---------------|:--------------------|:------|:----------------|:--------
 * `bdc`      | `border-color` | String              | ✓     | Default color** | `transparent`
 * `bd{dir}`* | `border-{dir}-width` <br /> `border-{dir}-style` | `Number`, `Boolean`, `String` | ✓ | `1px` <br /> `solid` | `0px` <br /> `none`
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

const border = createPropStyles({
  bd: borderRule(),
  bdl: borderRule('Left'),
  bdr: borderRule('Right'),
  bdt: borderRule('Top'),
  bdb: borderRule('Bottom'),
  bdx: [ borderRule('Left'), borderRule('Right') ],
  bdy: [ borderRule('Top'), borderRule('Bottom') ],
  bdc: rule('borderColor', colorValue('border'))
})

export {
  border
}
