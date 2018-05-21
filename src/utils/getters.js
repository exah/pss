import { pathOr, curryN } from 'ramda'
import { isStr, isArr } from './is'
import { getSpaceValue } from './helpers'
import { DEFAULT_KEY } from '../constants'

// TODO: getColor
// TODO: remove getTheme in every getter

const themeDefaultMediaKey = pathOr(null, [ 'defaults', 'mq' ])
const themeDefaultPaletteName = pathOr(DEFAULT_KEY, [ 'defaults', 'palette' ])
const themeSpaces = pathOr({}, [ 'sizes', 'space' ])

const getTheme = (data = {}) => data.theme || data

const themeMedia = (props) =>
  pathOr({}, [ 'mqs' ], getTheme(props))

const themePalette = curryN(2, (props, paletteName) => {
  const theme = getTheme(props)

  return (
    theme.palette[paletteName] ||
    theme.palette[themeDefaultPaletteName(theme)] ||
    theme.palette[DEFAULT_KEY] ||
    {}
  )
})

const themeColors = curryN(2, (props, paletteName) => {
  const theme = getTheme(props)
  const palette = themePalette(theme, paletteName)

  return {
    ...theme.colors,
    ...palette
  }
})

const getSize = curryN(2, (props, key) => {
  if (!key) return 0
  if (isStr(key)) {
    const theme = getTheme(props)
    return theme.sizes[key] || key
  }
  return null
})

const getSpace = curryN(3, (props, step, mediaKey, exact = false) => {
  const theme = getTheme(props)
  const size = getSize(props, step)

  if (size) return size

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
  getTheme,
  themeMedia,
  themePalette,
  themeColors,
  getSize,
  getSpace
}
