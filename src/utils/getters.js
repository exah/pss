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

const themeDefaultMediaKey = path([ DEFAULT_KEY, MEDIA_KEY ], null)
const themeDefaultPaletteName = path([ DEFAULT_KEY, PALETTE_KEY ], DEFAULT_KEY)
const themeSpaces = path(SPACE_KEY, {})
const themeMedia = path(MEDIA_KEY, {})
const themePalettes = path(PALETTE_KEY, {})
const themeColors = path(COLORS_KEY, {})

const fromTheme = (paths, fallback) =>
  (props) => path(paths, fallback, props.theme)

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

const getThemeMediaValue = (key) => (theme, value) => {
  const defaultMediaKey = themeDefaultMediaKey(theme)
  const themeName = value === true
    ? path([ DEFAULT_KEY, ...key.split('.') ], DEFAULT_KEY)(theme)
    : value
  const themeValue = path(key, {})(theme)[themeName]

  if (isObj(themeValue) && themeValue.hasOwnProperty(defaultMediaKey)) {
    return (mediaKey, exact = false) => {
      const mediaValue = themeValue[mediaKey]

      if (mediaValue != null) {
        return mediaValue
      }

      const defaultMediaValue = themeValue[defaultMediaKey]

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
  const defaultMediaKey = themeDefaultMediaKey(theme)

  if (!isNum(step) && !isBool(step)) {
    const themeSize = getSize(theme, step)

    if (isFn(themeSize)) {
      const size = themeSize(mediaKey, exact)
      if (size !== step) {
        return size
      }
    } else if ((exact === true && mediaKey === defaultMediaKey) || !exact) {
      return themeSize == null ? step : themeSize
    }
    return null
  }

  const spaces = themeSpaces(theme)
  const spaceSizes = isArr(spaces)
    ? spaces
    : spaces[mediaKey] || spaces[exact || defaultMediaKey]

  if (!spaceSizes) return null

  return spaceValue(spaceSizes, step)
}

export {
  themeDefaultMediaKey,
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
