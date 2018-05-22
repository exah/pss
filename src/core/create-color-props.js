import { curryN } from 'ramda'
import { getColors, getColor, isColor } from '../utils'

const createThemeProp = (bgKey, fgKey) => curryN(2, (value, { theme }) => {
  if (value == null) return {}
  if (value === false) {
    return {
      backgroundColor: 'transparent',
      color: 'transparent'
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
  if (value === false) return 'transparent'

  const color = isColor(value) ? value : getColor(theme, colorKey, value)

  return !color ? {} : {
    [cssProp]: color
  }
})

export {
  createColorProp,
  createThemeProp
}
