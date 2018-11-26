// @flow

import type { PropStyle, StyleValue, Props } from '../types'
import { identity, fallbackTo, curryN } from '@exah/utils'
import { CSS_DEFAULT_VALUE, CSS_PROPS_DEFAULTS } from '../constants'
import { getColor } from '../getters'

/**
 * ```js
 * import { createColor } from 'pss'
 * ```
 *
 * Get color from theme and apply it to css prop.
 *
 * @param cssProp — Any CSS prop like `backgroundColor`, `color`, `borderColor`, ...
 * @param colorKey — Key in `theme.color` or in `theme.palette[theme.default.palette]`
 * @param getCssValue — Return customized CSS prop value (i.e. `box-shadow`, gradients) (optional, default to result color)
 *
 * @example
 * import styled from 'react-emotion'
 * import pss, { createColor } from 'pss'
 *
 * const myColors = pss({
 *   color: createColor('color', 'fg'),
 *   shadow: createColor('boxShadow', 'shadow', (color) => `0 0 20px 0 ${color}`)
 * })
 *
 * // Add to component
 * const Box = styled.div(myColors)
 *
 * @example
 * // theme.palette.default.fg
 * <Box color /> // background-color: #222222
 *
 * // theme.colors.black
 * <Box color='black' /> // color: #222222
 *
 * // theme.palette.default.accent
 * <Box color='accent' /> // color: #ff0000
 *
 * // theme.palette.default.shadow
 * <Box shadow /> // box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2)
 */

const createColor = (
  cssProp: string,
  paletteKey: string,
  getCssValue?: (color: string, props: Props) => StyleValue = identity
): PropStyle => curryN(2, (input, props, mediaKey, isRawValue) => {
  if (input == null) {
    return {}
  }

  if (isRawValue === true) {
    return {
      [cssProp]: input
    }
  }

  const color = input === false
    ? CSS_PROPS_DEFAULTS[cssProp] || CSS_DEFAULT_VALUE
    : fallbackTo(getColor(paletteKey, input)(props), input)

  return !color ? {} : {
    [cssProp]: getCssValue(color, props)
  }
})

export {
  createColor
}
