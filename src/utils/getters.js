import { pathOr, curryN } from 'ramda'
import { isStr, isArr } from './is'
import { getSpaceValue } from './helpers'

export const themeDefaultMediaKey = pathOr(null, [ 'defaults', 'mq' ])
export const themeSpaces = pathOr({}, [ 'sizes', 'space' ])

export const getTheme = (data = {}) => data.theme || data

export const themeMedia = (props) =>
  pathOr({}, [ 'mqs' ], getTheme(props))

export const getSize = curryN(2, (props, key) => {
  if (!key) return 0
  if (isStr(key)) {
    const theme = getTheme(props)
    return theme.sizes[key] || key
  }
  return null
})

export const getSpace = curryN(3, (props, step, mediaKey, exact = false) => {
  const theme = getTheme(props)
  const size = getSize(props, step)

  if (size) return size

  const spaces = themeSpaces(theme)
  const defaultMediaKey = exact || themeDefaultMediaKey(theme)
  const spaceSizes = isArr(spaces) ? spaces : spaces[mediaKey] || spaces[defaultMediaKey]

  if (!spaceSizes) return

  return getSpaceValue(spaceSizes, step)
})
