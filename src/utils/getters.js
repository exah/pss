import { pathOr, curryN } from 'ramda'
import { DEFAULT_KEY } from '../constants'
import { isStr, isArr } from './is'
import { getSpaceValue } from './helpers'

const themeDefaultMediaKey = pathOr(null, [ 'defaults', 'mq' ])
const themeDefaultPaletteName = pathOr(DEFAULT_KEY, [ 'defaults', 'palette' ])
const themeSpaces = pathOr({}, [ 'sizes', 'space' ])
const themeMedia = pathOr({}, [ 'mqs' ])
const themePalettes = pathOr({}, [ 'palettes' ])
const themeColors = pathOr({}, [ 'colors' ])

const getPalette = curryN(2, (theme, name) => {
  const palettes = themePalettes(theme)

  return (
    palettes[name] ||
    palettes[themeDefaultPaletteName(theme)] ||
    palettes[DEFAULT_KEY] ||
    {}
  )
})

const getColors = curryN(2, (theme, paletteName) => {
  const colors = themeColors(theme)
  const palette = getPalette(theme, paletteName)

  return {
    ...palette,
    ...colors
  }
})

const getColor = curryN(2, (theme, key, colorName) => {
  const colors = getColors(theme, null)
  const palette = getPalette(theme, colorName)
  const fallback = palette[key] ? palette : colors

  return isStr(colorName) ? colors[colorName] || fallback[key] : colors[key]
})

const getSize = curryN(2, ({ theme }, key) => {
  if (!key) return 0
  if (!isStr(key)) return null

  return theme.sizes[key] || key
})

const getSpace = curryN(3, (theme, step, mediaKey, exact = false) => {
  const size = getSize(theme, step)

  if (size != null) return size

  const spaces = themeSpaces(theme)
  const defaultMediaKey = exact || themeDefaultMediaKey(theme)
  const spaceSizes = isArr(spaces) ? spaces : spaces[mediaKey] || spaces[defaultMediaKey]

  if (!spaceSizes) return

  return getSpaceValue(spaceSizes, step)
})

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
