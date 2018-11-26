import { isStr, fallbackTo, isArr, path } from '@exah/utils'
import { spaceValue, hasMediaKeys, keys } from '../utils'

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

export const getTheme = (props) => (props && props.theme) || Object(props)

export const themePath = (input, defaultValue) => (props) => path(
  input,
  defaultValue
)(getTheme(props))

export const getMedia = (props) => ({
  ...DEFAULT_THEME_MEDIA,
  ...path(MEDIA_KEY)(getTheme(props))
})

export const getMediaKeys = (props) => keys(getMedia(props))
export const getDefaultMedia = themePath([ DEFAULT_KEY, MEDIA_KEY ], DEFAULT_KEY)
export const getDefaultPaletteName = themePath([ DEFAULT_KEY, PALETTE_KEY ], DEFAULT_KEY)
export const getPalettes = themePath(PALETTE_KEY, DEFAULT_THEME_PALETTE)
export const getColors = themePath(COLORS_KEY, DEFAULT_THEME_COLORS)
export const getSpaces = themePath(SPACE_KEY, DEFAULT_THEME_SPACE)

export const getThemeMediaValue = (themeDataKey) => (
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

  if (hasMediaKeys(getMediaKeys(props), themeValue)) {
    return (mediaKey) => themeValue[mediaKey]
  }

  return fallbackTo(
    themeValue,
    defaultValue
  )
}

export const getSize = getThemeMediaValue(SIZES_KEY)

export function getSpace (input, defaultValue, defaultMediaKey) {
  if (isStr(input)) {
    return getSize(input, input, defaultMediaKey)
  }

  return (props) => {
    const spaces = getSpaces(props)

    if (isArr(spaces)) {
      return spaceValue(input, spaces)
    }

    if (defaultMediaKey != null) {
      return spaceValue(input, fallbackTo(
        spaces[defaultMediaKey],
        spaces[DEFAULT_KEY]
      ))
    }

    if (hasMediaKeys(getMediaKeys(props), spaces)) {
      return (mediaKey) => spaceValue(input, spaces[mediaKey])
    }

    return defaultValue
  }
}

export const getPaletteColors = (input) => (props) => path(
  isStr(input) ? input : getDefaultPaletteName(props),
  {}
)(getPalettes(props))

export const getActiveColors = (input) => (props) => {
  const palette = getPaletteColors(input)(props)
  const colors = getColors(props)

  return {
    ...palette,
    ...colors
  }
}

export const getColor = (defaultColorKey, colorKey = true) => (props) => {
  const activeColors = getActiveColors()(props)

  const color = colorKey === true
    ? path(defaultColorKey)(activeColors)
    : isStr(colorKey) ? path(colorKey)(activeColors) : null

  return fallbackTo(
    color,
    path(defaultColorKey)(getPaletteColors(colorKey)(props))
  )
}
