import { isFn } from '../utils/is'
import { identity } from '../utils/fns'
import { themeMedia } from '../utils/getters'
import { wrapIfMedia } from '../utils/helpers'

const everyMedia = (theme, getStyle) =>
  Object.entries(themeMedia(theme))
    .reduce((acc, [ mediaKey, mediaQuery ]) => acc.concat(wrapIfMedia(
      mediaQuery,
      getStyle(mediaKey)
    ) || []), [])

const everyMediaValue = (
  theme,
  fnMediaKey,
  themeValue,
  wrapper = identity
) => {
  if (isFn(themeValue)) {
    if (fnMediaKey != null) {
      return wrapper(themeValue(fnMediaKey))
    }

    return everyMedia(theme, (mediaKey) => wrapper(themeValue(mediaKey, true)))
  }

  return wrapper(themeValue)
}

export {
  everyMedia,
  everyMediaValue
}
