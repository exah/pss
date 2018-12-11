import { fallbackTo, path, identity, mapObj } from '@exah/utils'
import { hasMediaKeys, keys } from '../utils'

import {
  DEFAULT_KEY,
  MEDIA_KEY,
  DEFAULT_THEME_MEDIA
} from '../constants'

export const getTheme = (props) => (props && props.theme) || Object(props)

/**
 * ```js
 * import { themePath } from 'pss'
 * ```
 *
 * Get value from theme.
 *
 * @example
 * import { themePath } from 'pss'
 *
 * const Box = styled.div`
 *   width: ${themePath('size.card')};
 *   background-color: ${themePath('color.red', 'hotpink')};
 * `
 *
 * <Box /> // → { width: 200px; background-color: hotpink; }
 */

export const themePath = (input, defaultValue) => (props) => path(
  input,
  defaultValue
)(getTheme(props))

/**
 * ```js
 * import { mq } from 'pss'
 * ```
 *
 * Get value from theme.
 *
 * @param [mediaKey] — key in `theme.media`
 *
 * @example
 * import { mq, themePath } from 'pss'
 *
 * const Box = styled.div`
 *   ${mq('sm')} {
 *     background-color: ${themePath('color.red', 'hotpink')};
 *   }
 * `
 *
 * <Box /> // → @media (max-width: 600px) { background-color: red; }
 */

export const mq = (mediaKey = 'default') =>
  (props) => `@media ${getMedia(mediaKey)(props)}`

export const getThemeMedia = (props) => ({
  ...DEFAULT_THEME_MEDIA,
  ...path(MEDIA_KEY)(getTheme(props))
})

export const getDefault = (input, defaultValue = DEFAULT_KEY) => themePath(
  [ DEFAULT_KEY, input ],
  defaultValue
)

export const getMedia = (input, media) => media
  ? path(input)(media)
  : (props) => path(input)(getThemeMedia(props))

export const getThemeValue = (
  themeDataKey,
  transformValue = identity
) => (
  input,
  defaultValue,
  defaultMediaKey
) => (props) => {
  const themeKey = input === true
    ? getDefault(themeDataKey)(props)
    : input

  const themeData = themePath(themeDataKey)(props)
  const themeValue = path(themeKey)(themeData)

  if (Object(themeValue).hasOwnProperty(defaultMediaKey)) {
    return transformValue(themeValue[defaultMediaKey])
  }

  if (hasMediaKeys(getThemeMedia(props), keys(themeValue))) {
    return mapObj(
      (key, value) => ({ [key]: transformValue(themeValue[key]) }),
      themeValue
    )
  }

  return transformValue(fallbackTo(themeValue, defaultValue))
}
