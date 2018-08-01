import { SHORT_DIRECTIONS } from '../constants'
import { createPropStyles, colorProp, sizeProp } from '../core'
import { isNum, isStr, isBool, isArr } from '../utils/is'
import { mapObj } from '../utils/helpers'

const borderStyle = (Dir = '') => {
  const widthCssProp = `border${Dir}Width`
  const styleCssProp = `border${Dir}Style`
  const getWidthStyles = sizeProp(widthCssProp, 1, 0)

  return (value, props, mediaKey) => {
    if (isBool(value) || isNum(value)) {
      return {
        ...getWidthStyles(value, props, mediaKey),
        [styleCssProp]: value ? 'solid' : 'none'
      }
    } else if (isStr(value) || isArr(value)) {
      // '5px dotted' -> [ '5px', 'dotted' ]
      const [ parsedWidth, style = 'solid' ] = value.toString().split(/,|\s+/g)

      return {
        ...getWidthStyles(parsedWidth, props, mediaKey),
        [styleCssProp]: style
      }
    }

    return {}
  }
}

/**
 * Alias **`border`**
 *
 * ```js
 * import { border } from 'pss'
 * ```
 *
 * Set border with values from theme, created with {@link sizeProp} and {@link colorProp}.
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

const borderPropStyles = createPropStyles({
  bdc: colorProp('borderColor', 'border'),
  bd: borderStyle(),
  ...mapObj(SHORT_DIRECTIONS, ([ shortDir, longDir ]) => [
    'bd' + shortDir,
    longDir.map((dir) => borderStyle(dir))
  ])
})

export {
  borderPropStyles
}
