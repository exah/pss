import { pathOr } from 'ramda'

import {
  DEFAULT_KEY,
  COLORS_KEY,
  MEDIA_KEY,
  PALETTE_KEY,
  SIZES_KEY,
  SPACE_KEY
} from '../constants'

import { isStr, isArr, isNum } from './is'
import { spaceValue, sizeValue } from './helpers'

const themePath = (path, fallback) =>
  pathOr(fallback, (isStr(path) ? path.split('.') : path || []))

const themeDefaultMediaKey = themePath([ DEFAULT_KEY, MEDIA_KEY ], null)
const themeDefaultPaletteName = themePath([ DEFAULT_KEY, PALETTE_KEY ], DEFAULT_KEY)
const themeSizes = themePath(SIZES_KEY, {})
const themeSpaces = themePath(SPACE_KEY, {})
const themeMedia = themePath(MEDIA_KEY, {})
const themePalettes = themePath(PALETTE_KEY, {})
const themeColors = themePath(COLORS_KEY, {})

const fromTheme = (...args) => (props) => themePath(...args)(props.theme)

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

const getSpace = (theme, step) => (mediaKey, exact = false) => {
  const size = isNum(step) ? null : getSize(theme, step)
  if (size != null) return size

  const spaces = themeSpaces(theme)
  const defaultMediaKey = exact || themeDefaultMediaKey(theme)
  const spaceSizes = isArr(spaces) ? spaces : spaces[mediaKey] || spaces[defaultMediaKey]

  if (!spaceSizes) return

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
  getSpace
}
