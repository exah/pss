import { pathOr } from 'ramda'
import { DEFAULT_KEY } from '../constants'
import { isStr, isArr, isNum } from './is'
import { spaceValue, sizeValue } from './helpers'

const themeDefaultMediaKey = pathOr(null, [ 'defaults', 'mq' ])
const themeDefaultPaletteName = pathOr(DEFAULT_KEY, [ 'defaults', 'palette' ])
const themeSizes = pathOr({}, [ 'sizes' ])
const themeSpaces = pathOr({}, [ 'sizes', 'space' ])
const themeMedia = pathOr({}, [ 'mqs' ])
const themePalettes = pathOr({}, [ 'palettes' ])
const themeColors = pathOr({}, [ 'colors' ])

const getPalette = (theme, name) => {
  const palettes = themePalettes(theme)

  return (
    palettes[name] ||
    palettes[themeDefaultPaletteName(theme)] ||
    palettes[DEFAULT_KEY] ||
    {}
  )
}

const getColors = (theme, paletteName) => {
  const colors = themeColors(theme)
  const palette = getPalette(theme, paletteName)

  return {
    ...palette,
    ...colors
  }
}

const getColor = (theme, key, colorName) => {
  const colors = getColors(theme)
  const palette = getPalette(theme, colorName)
  const fallback = palette[key] ? palette : colors

  return isStr(colorName) ? colors[colorName] || fallback[key] : colors[key]
}

const getSize = (theme, val, trueVal, falseVal) => {
  const themeSizeVal = themeSizes(theme)[val]
  const size = themeSizeVal == null
    ? sizeValue(val, trueVal, falseVal)
    : themeSizeVal

  return size == null ? val : size
}

const getSpace = (theme, step) => {
  const size = isNum(step) ? null : getSize(theme, step)

  return (mediaKey, exact = false) => {
    if (size != null) return size

    const spaces = themeSpaces(theme)
    const defaultMediaKey = exact || themeDefaultMediaKey(theme)
    const spaceSizes = isArr(spaces) ? spaces : spaces[mediaKey] || spaces[defaultMediaKey]

    if (!spaceSizes) return

    return spaceValue(spaceSizes, step)
  }
}

export {
  themeDefaultMediaKey,
  themeDefaultPaletteName,
  themeSpaces,
  themeMedia,
  themePalettes,
  themeColors,
  getPalette,
  getColors,
  getColor,
  getSize,
  getSpace
}
