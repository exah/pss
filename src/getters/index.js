import { path, identity, isObj, isFn, mapObj } from '@exah/utils'

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

export const themePath = (input, defaultValue) => (props) =>
  path(input, defaultValue)(getTheme(props))

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

export function getThemeValue (themeKey, transformValue) {
  const isTransformValue = isFn(transformValue)

  if (!isTransformValue) {
    transformValue = identity
  }

  return (input, defaultValue, mediaKey) => (props) => {
    const valueKey = input === true
      ? getDefault(themeKey)(props)
      : input

    const themeData = themePath(themeKey)(props)
    const themeValue = path(valueKey)(themeData)

    if (Object(themeValue).hasOwnProperty(mediaKey)) {
      return transformValue(themeValue[mediaKey])
    }

    if (isTransformValue && isObj(themeValue)) {
      return mapObj(
        (key, value) => ({ [key]: transformValue(themeValue[key]) }),
        themeValue
      )
    }

    return themeValue == null
      ? defaultValue
      : transformValue(themeValue)
  }
}
