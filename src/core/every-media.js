import { isFn, identity, reduceObj } from '@exah/utils'
import { wrapIfMedia } from '../utils/helpers'
import { themeMedia } from '../utils/getters'

const everyMedia = (getStyle) => (props) => reduceObj(
  (acc, mediaKey, mediaQuery) => acc.concat(
    wrapIfMedia(mediaQuery, getStyle(mediaKey)) || []
  ),
  themeMedia(props),
  []
)

const everyMediaValue = (
  mediaKey,
  getThemeValue,
  wrapper = identity
) => (props) => {
  if (isFn(getThemeValue)) {
    if (mediaKey != null) {
      return wrapper(getThemeValue(mediaKey))
    }

    return everyMedia((key) => wrapper(getThemeValue(key, true)))(props)
  }

  return wrapper(getThemeValue)
}

export {
  everyMedia,
  everyMediaValue
}
