import { isFn } from '../utils/is'
import { curryN, identity } from '../utils/fns'
import { themeMedia } from '../utils/getters'
import { wrapIfMedia } from '../utils/helpers'

const everyMedia = curryN(2, (getStyle, theme) =>
  Object.entries(themeMedia(theme))
    .reduce((acc, [ mediaKey, mediaQuery ]) => acc.concat(wrapIfMedia(
      mediaQuery,
      getStyle(mediaKey)
    ) || []), [])
)

const everyMediaValue = (
  theme,
  mediaKey,
  themeValue,
  wrapper = identity
) => {
  if (isFn(themeValue)) {
    if (mediaKey != null) {
      return wrapper(themeValue(mediaKey))
    }

    return everyMedia(
      (_mediaKey) => wrapper(themeValue(_mediaKey, true)),
      theme
    )
  }

  return wrapper(themeValue)
}

export {
  everyMedia,
  everyMediaValue
}
