import { isNum, isStr, isBool, isArr, mapObj } from '@exah/utils'
import { SHORT_DIRECTIONS } from '../constants'
import { createPropStyles, experimentalCreateRule } from '../core'
import { colorValue, sizeValue, boolValue } from '../value'
import { px } from '../utils'

const borderStyle = (Dir = '') => {
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
 * Set border with values from theme, created with {@link createSize} and {@link createColor}.
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
 * import styled from 'react-emotion'
 *
 * const Box = styled('p')(border)
 *
 * @example
 * // border-width: 1px; border-style: solid; border-color: #eee
 * <Box bd bdc />
 *
 * // border-left-width: 1px; border-left-style: dotted; border-color: red
 * <Box bdl='1px dotted' bdc='red' />
 */

const border = createPropStyles({
  bdc: experimentalCreateRule('borderColor', colorValue('border')),
  bd: borderStyle(),
  ...mapObj((shortDir, longDir) => [
    'bd' + shortDir,
    longDir.map((dir) => borderStyle(dir))
  ], SHORT_DIRECTIONS)
})

export {
  border
}
