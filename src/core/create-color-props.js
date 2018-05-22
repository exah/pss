import { curryN } from 'ramda'
import { themeColors, themeColor, isColor } from '../utils'

const createThemeProp = (bgKey, fgKey) => curryN(2, (value, { theme }) => {
  if (value == null) return {}
  if (value === false) {
    return {
      backgroundColor: 'transparent',
      color: 'transparent'
    }
  }

  const palette = themeColors(theme, value)

  return {
    backgroundColor: palette[bgKey],
    color: palette[fgKey]
  }
})

const createColorProp = (cssProp, colorKey) => curryN(2, (value, { theme }) => {
  if (value == null) return {}
  if (value === false) return 'transparent'

  const color = isColor(value) ? value : themeColor(theme, colorKey, value)

  return !color ? {} : {
    [cssProp]: color
  }
})

export {
  createColorProp,
  createThemeProp
}
