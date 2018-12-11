import { identity, mapObj } from '@exah/utils'
import { wrapIfMedia, hasMediaKeys, keys } from '../utils'
import { getThemeMedia } from '../getters'

const everyMedia = (
  value,
  wrapper = identity,
  props
) => {
  const media = getThemeMedia(props)

  if (hasMediaKeys(media, keys(value))) {
    return mapObj((k, v) => wrapIfMedia(media[k], wrapper(v)), value)
  }

  return wrapper(value)
}

export {
  everyMedia
}
