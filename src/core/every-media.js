import { identity } from '@exah/utils'
import { wrapIfMedia, hasMediaKeys, keys } from '../utils'
import { getThemeMedia } from '../getters'

const everyMedia = (
  value,
  wrapper = identity,
  props
) => {
  const media = getThemeMedia(props)

  if (hasMediaKeys(media, keys(value))) {
    return keys(value).reduce((acc, key) => ({
      ...acc,
      ...wrapIfMedia(media[key], wrapper(value[key]))
    }), {})
  }

  return wrapper(value)
}

export {
  everyMedia
}
