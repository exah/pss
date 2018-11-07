import { isStr, isFn, fallbackTo, path } from '@exah/utils'

import {
  DEFAULT_KEY,
  COLORS_KEY,
  MEDIA_KEY,
  PALETTE_KEY,
  SIZES_KEY,
  SPACE_KEY
} from '../constants'

import { spaceValue } from './helpers'

const themePath = (input, fallback) => (src) => fallbackTo(
  path(input)((src && src.theme) || src),
  fallback
)

const themeDefaultPaletteName = themePath([ DEFAULT_KEY, PALETTE_KEY ], DEFAULT_KEY)
const themeDefaultMedia = themePath([ DEFAULT_KEY, MEDIA_KEY ], DEFAULT_KEY)
const themeSpaces = themePath(SPACE_KEY, {})
const themeMedia = themePath(MEDIA_KEY, {})
const themePalettes = themePath(PALETTE_KEY, {})
const themeColors = themePath(COLORS_KEY, {})

const getPalette = (theme, name) => {
  const palettes = themePalettes(theme)

  return fallbackTo(
    palettes[name],
    palettes[themeDefaultPaletteName(theme)],
    palettes[DEFAULT_KEY],
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

  return isStr(colorName) ? themePath(colorName, fallback[key])(colors) : colors[key]
}

const getThemeMediaValue = (themeParentKey) => (theme, value) => {
  const key = value === true
    ? themePath([ DEFAULT_KEY, themeParentKey ], DEFAULT_KEY)(theme)
    : isStr(value) ? value : null

  const src = themePath(themeParentKey, null)(theme)
  const result = key == null ? null : themePath(key, null)(src)

  if (result !== null && result.hasOwnProperty(DEFAULT_KEY)) {
    return (mediaKey, exact = false) => {
      return fallbackTo(
        result[mediaKey],
        exact ? null : result[DEFAULT_KEY]
      )
    }
  }

  return result
}

const getSize = getThemeMediaValue(SIZES_KEY)

const getSpace = (theme, step) => (mediaKey, exact = false) => {
  if (isStr(step)) {
    const themeSize = getSize(theme, step)

    if (isFn(themeSize)) {
      const size = themeSize(mediaKey, exact)
      if (size !== step) {
        return size
      }
    } else if ((exact === true && mediaKey === DEFAULT_KEY) || !exact) {
      return fallbackTo(themeSize, step)
    }
    return null
  }

  const spaces = themeSpaces(theme)

  return spaceValue(step, fallbackTo(
    spaces[mediaKey],
    exact ? [] : spaces[DEFAULT_KEY],
    []
  ))
}

export {
  getThemeMediaValue,
  themeDefaultPaletteName,
  themeDefaultMedia,
  themeSpaces,
  themeMedia,
  themePalettes,
  themeColors,
  themePath,
  getPalette,
  getColors,
  getColor,
  getSize,
  getSpace
}
