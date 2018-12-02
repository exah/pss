import { isStr, fallbackTo, isArr, path, identity } from '@exah/utils'
import { spaceValue, hasMediaKeys, keys, px } from '../utils'

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

export const getThemeMedia = (props) => ({
  ...DEFAULT_THEME_MEDIA,
  ...path(MEDIA_KEY)(getTheme(props))
})

export const getThemeMediaKeys = (props) => keys(getThemeMedia(props))
export const getDefaultMedia = themePath([ DEFAULT_KEY, MEDIA_KEY ], DEFAULT_KEY)

export const getDefaultPaletteName = themePath([ DEFAULT_KEY, PALETTE_KEY ], DEFAULT_KEY)
export const getPalettes = themePath(PALETTE_KEY, DEFAULT_THEME_PALETTE)
export const getColors = themePath(COLORS_KEY, DEFAULT_THEME_COLORS)
export const getSpaces = themePath(SPACE_KEY, DEFAULT_THEME_SPACE)

export const getThemeMediaValue = (
  themeDataKey,
  transformValue = identity
) => (
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
    return transformValue(themeValue[defaultMediaKey])
  }

  if (hasMediaKeys(getThemeMediaKeys(props), keys(themeValue))) {
    return (mediaKey) => transformValue(themeValue[mediaKey])
  }

  return transformValue(fallbackTo(themeValue, defaultValue))
}

export const getSize = getThemeMediaValue(SIZES_KEY, px)

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

    if (hasMediaKeys(getThemeMediaKeys(props), keys(spaces))) {
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

  if (!colorKey) return color

  return fallbackTo(
    color,
    path(defaultColorKey)(getPaletteColors(colorKey)(props))
  )
}
