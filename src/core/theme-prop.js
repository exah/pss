// @flow
import { CSS_DEFAULT_VALUE, CSS_PROPS_DEFAULTS } from '../constants'
import { getColors, getColor, isColor, identity, curryN } from '../utils'

import type {
  PropStyleFn,
  CSSProp,
  ThemeKey
} from '../types'

const themeProp = (
  bgKey: ThemeKey,
  fgKey: ThemeKey
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

const colorProp = (
  cssProp: CSSProp,
  colorKey: ThemeKey,
  getCssValue?: Function = identity
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
