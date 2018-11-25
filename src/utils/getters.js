import { isStr, fallbackTo, isArr, path } from '@exah/utils'
import { spaceValue, hasMediaKeys, keys } from './helpers'

import {
  DEFAULT_KEY,
  COLORS_KEY,
  MEDIA_KEY,
  PALETTE_KEY,
  SIZES_KEY,
  SPACE_KEY,
  DEFAULT_THEME_MEDIA,
  DEFAULT_THEME_SPACE,
  DEFAULT_THEME_PALETTE,
  DEFAULT_THEME_COLORS
} from '../constants'

const getTheme = (props) => (props && props.theme) || Object(props)

const themePath = (input, defaultValue) => (props) => path(
  input,
  defaultValue
)(getTheme(props))

const themeMedia = (props) => ({
  ...DEFAULT_THEME_MEDIA,
  ...path(MEDIA_KEY)(getTheme(props))
})

const themeMediaKeys = (props) => keys(themeMedia(props))
const themeDefaultMedia = themePath([ DEFAULT_KEY, MEDIA_KEY ], DEFAULT_KEY)
const themeDefaultPaletteName = themePath([ DEFAULT_KEY, PALETTE_KEY ], DEFAULT_KEY)
const themePalettes = themePath(PALETTE_KEY, DEFAULT_THEME_PALETTE)
const themeColors = themePath(COLORS_KEY, DEFAULT_THEME_COLORS)
const themeSpaces = themePath(SPACE_KEY, DEFAULT_THEME_SPACE)

const getThemeMediaValue = (themeDataKey) => (
  input,
  defaultValue,
  defaultMediaKey
) => (props) => {
  const themeKey = input === true
    ? themePath([ DEFAULT_KEY, themeDataKey ], DEFAULT_KEY)(props)
    : input

  const themeData = themePath(themeDataKey)(props)
  const themeValue = path(themeKey)(themeData)

  if (Object(themeValue).hasOwnProperty(defaultMediaKey)) {
    return themeValue[defaultMediaKey]
  }

  if (hasMediaKeys(themeMediaKeys(props), themeValue)) {
    return (mediaKey) => themeValue[mediaKey]
  }

  return fallbackTo(
    themeValue,
    defaultValue
  )
}

const getSize = getThemeMediaValue(SIZES_KEY)

function getSpace (input, defaultValue, defaultMediaKey) {
  if (isStr(input)) {
    return getSize(input, input, defaultMediaKey)
  }

  return (props) => {
    const spaces = themeSpaces(props)

    if (isArr(spaces)) {
      return spaceValue(input, spaces)
    }

    if (defaultMediaKey != null) {
      return spaceValue(input, fallbackTo(
        spaces[defaultMediaKey],
        spaces[DEFAULT_KEY]
      ))
    }

    if (hasMediaKeys(themeMediaKeys(props), spaces)) {
      return (mediaKey) => spaceValue(input, spaces[mediaKey])
    }

    return defaultValue
  }
}

const getPaletteColors = (input) => (props) => {
  const paletteKey = isStr(input) ? input : themeDefaultPaletteName(props)
  return path(paletteKey, {})(themePalettes(props))
}

const getActiveColors = (input) => (props) => {
  const palette = getPaletteColors(input)(props)
  const colors = themeColors(props)

  return {
    ...palette,
    ...colors
  }
}

const getColor = (defaultColorKey, colorKey = true) => (props) => {
  const activeColors = getActiveColors()(props)

  const color = colorKey === true
    ? path(defaultColorKey)(activeColors)
    : isStr(colorKey) ? path(colorKey)(activeColors) : null

  return fallbackTo(
    color,
    path(defaultColorKey)(getPaletteColors(colorKey)(props))
  )
}

export {
  themeDefaultPaletteName,
  themeDefaultMedia,
  themeSpaces,
  themeMedia,
  themePalettes,
  themeColors,
  themePath,
  getThemeMediaValue,
  getPaletteColors,
  getActiveColors,
  getColor,
  getSize,
  getSpace
}
