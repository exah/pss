import {
  DEFAULT_KEY,
  COLORS_KEY,
  MEDIA_KEY,
  PALETTE_KEY,
  SIZES_KEY,
  SPACE_KEY,
  TEXT_STYLE_KEY
} from '../constants'

import { isStr, isArr, isNum, isObj, isFn, isBool } from './is'
import { spaceValue, path } from './helpers'

const themeDefaultPaletteName = path([ DEFAULT_KEY, PALETTE_KEY ], DEFAULT_KEY)
const themeSpaces = path(SPACE_KEY, {})
const themeMedia = path(MEDIA_KEY, {})
const themePalettes = path(PALETTE_KEY, {})
const themeColors = path(COLORS_KEY, {})

const fromTheme = (key, fallback) =>
  (src) => path(key, fallback, src.theme || src)

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

  return isStr(colorName) ? path(colorName, fallback[key])(colors) : colors[key]
}

const getThemeMediaValue = (key) => (theme, value) => {
  const themeName = value === true
    ? path([ DEFAULT_KEY, ...key.split('.') ], DEFAULT_KEY)(theme)
    : value
  const themeValue = path(key, {})(theme)[themeName]

  if (isObj(themeValue) && themeValue.hasOwnProperty(DEFAULT_KEY)) {
    return (mediaKey, exact = false) => {
      const mediaValue = themeValue[mediaKey]

      if (mediaValue != null) {
        return mediaValue
      }

      const defaultMediaValue = themeValue[DEFAULT_KEY]

      if (defaultMediaValue != null) {
        return exact === true ? null : defaultMediaValue
      }
    }
  }

  return themeValue
}

const getSize = getThemeMediaValue(SIZES_KEY)

const getTextStyle = getThemeMediaValue(TEXT_STYLE_KEY)

const getSpace = (theme, step) => (mediaKey, exact = false) => {
  if (!isNum(step) && !isBool(step)) {
    const themeSize = getSize(theme, step)

    if (isFn(themeSize)) {
      const size = themeSize(mediaKey, exact)
      if (size !== step) {
        return size
      }
    } else if ((exact === true && mediaKey === DEFAULT_KEY) || !exact) {
      return themeSize == null ? step : themeSize
    }
    return null
  }

  const spaces = themeSpaces(theme)
  const spaceSizes = isArr(spaces)
    ? spaces
    : spaces[mediaKey] || spaces[exact || DEFAULT_KEY]

  if (!spaceSizes) return null

  return spaceValue(spaceSizes, step)
}

export {
  themeDefaultPaletteName,
  themeSpaces,
  themeMedia,
  themePalettes,
  themeColors,
  fromTheme,
  getPalette,
  getColors,
  getColor,
  getSize,
  getSpace,
  getTextStyle
}
