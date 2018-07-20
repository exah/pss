// @flow

import type {
  PropStyleFn,
  CSSProp,
  CSSVal,
  Props,
  ThemeKey
} from '../types'

import { CSS_DEFAULT_VALUE, CSS_PROPS_DEFAULTS } from '../constants'
import { isColor } from '../utils/is'
import { identity, curryN } from '../utils/fns'
import { getColors, getColor } from '../utils/getters'

/**
 * ```js
 * import { themeProp } from '@exah/prop-styles-system'
 * ```
 *
 * Set both `background-color` and `color` for selected `theme.palette`.
 *
 * @param [bgKey = 'background'] — is key in `theme.palette[val]` for CSS `background-color` prop
 * @param [fgKey = 'foreground'] — is key in `theme.palette[val]` for CSS `color` prop
 *
 * @example
 * import styled from 'react-emotion'
 * import { themeProp, createPropStyles } from '@exah/prop-styles-system'
 *
 * const myColors = createPropStyles({
 *   tm: themeProp('bg', 'fg')
 * })
 *
 * const Box = styled.div(myColors)
 *
 * @example
 * // theme.palette.default.bg, theme.palette.default.fg
 * <Box tm /> // background-color: #ffffff; color: #222222
 *
 * // theme.palette.inverted.bg, theme.palette.inverted.fg
 * <Box tm='inverted' /> // background-color: #222222; color: #fffffff
 */

const themeProp = (
  bgKey: string = 'bg',
  fgKey: string = 'fg'
): PropStyleFn => curryN(2, (value, { theme }) => {
  if (value == null) {
    return {}
  }

  if (value === false) {
    return {
      backgroundColor: CSS_PROPS_DEFAULTS['backgroundColor'],
      color: CSS_PROPS_DEFAULTS['color']
    }
  }

  const palette = getColors(theme, value)

  return {
    backgroundColor: palette[bgKey],
    color: palette[fgKey]
  }
})

/**
 * ```js
 * import { colorProp } from '@exah/prop-styles-system'
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
 * import { colorProp, createPropStyles } from '@exah/prop-styles-system'
 *
 * const myColors = createPropStyles({
 *   color: colorProp('color', 'fg'),
 *   shadow: colorProp('boxShadow', 'shadow', (color) => `0 0 20px 0 ${color}`)
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

const colorProp = (
  cssProp: CSSProp,
  colorKey: ThemeKey,
  getCssValue?: (color: string, props: Props) => CSSVal = identity
): PropStyleFn => curryN(2, (value, props) => {
  if (value == null) {
    return {}
  }

  const color = value === false
    ? CSS_PROPS_DEFAULTS[cssProp] || CSS_DEFAULT_VALUE
    : isColor(value) ? value : getColor(props.theme, colorKey, value)

  return !color ? {} : {
    [cssProp]: getCssValue(color, props)
  }
})

export {
  colorProp,
  themeProp
}
