import { curryN } from 'ramda'
import { CSS_DEFAULT_VALUE, CSS_PROPS_DEFAULTS } from '../constants'
import { getColors, getColor, isColor } from '../utils'

const createThemeProp = (bgKey, fgKey) => curryN(2, (value, { theme }) => {
  if (value == null) return {}
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

const createColorProp = (cssProp, colorKey) => curryN(2, (value, { theme }) => {
  if (value == null) return {}

  const color = value === false
    ? CSS_PROPS_DEFAULTS[cssProp] || CSS_DEFAULT_VALUE
    : isColor(value) ? value : getColor(theme, colorKey, value)

  return !color ? {} : {
    [cssProp]: color
  }
})

export {
  createColorProp,
  createThemeProp
}
