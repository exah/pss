import { isStr, isFn, isArr, fallbackTo, path } from '@exah/utils'
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

const getThemeMediaValue = (themeDataKey) => (input, defaultValue) => (props) => {
  const themeKey = input === true
    ? themePath([ DEFAULT_KEY, themeDataKey ], DEFAULT_KEY)(props)
    : input

  const themeData = themePath(themeDataKey)(props)
  const themeValue = path(themeKey, defaultValue)(themeData)

  if (hasMediaKeys(themeMediaKeys(props), themeValue)) {
    return (mediaKey, every = false) => fallbackTo(
      themeValue[mediaKey],
      every ? null : themeValue[DEFAULT_KEY]
    )
  }

  return themeValue
}

const getSize = getThemeMediaValue(SIZES_KEY)

const getSpace = (input) => (props) => (mediaKey, every = false) => {
  const isDefaultValue = ((every === true && mediaKey === DEFAULT_KEY) || !every)

  if (isStr(input)) {
    const themeSize = getSize(input)(props)

    if (isFn(themeSize)) {
      const size = themeSize(mediaKey, every)
      if (size !== input) {
        return size
      }
    } else if (isDefaultValue) {
      return fallbackTo(themeSize, input)
    }
    return null
  }

  const spaces = themeSpaces(props)

  if (isArr(spaces) && isDefaultValue) {
    return spaceValue(input, spaces)
  }

  return spaceValue(input, fallbackTo(
    spaces[mediaKey],
    every ? [] : spaces[DEFAULT_KEY],
    []
  ))
}

const getPalette = (input) => (props) => {
  const palettes = themePalettes(props)

  return fallbackTo(
    palettes[input],
    palettes[themeDefaultPaletteName(props)],
    palettes[DEFAULT_KEY],
    {}
  )
}

const getColors = (input) => (props) => {
  const colors = themeColors(props)
  const palette = getPalette(input)(props)

  return {
    ...palette,
    ...colors
  }
}

const getColor = (key, colorName) => (props) => {
  const colors = getColors()(props)
  const palette = getPalette(colorName)(props)
  const fallback = palette[key] ? palette : colors

  return isStr(colorName) ? themePath(colorName, fallback[key])(colors) : colors[key]
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
  getPalette,
  getColors,
  getColor,
  getSize,
  getSpace
}
