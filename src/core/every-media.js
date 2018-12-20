import { identity, mapObj, isObj } from '@exah/utils'
import { wrapIfMedia } from '../utils'
import { getThemeMedia } from '../getters'

const has = (a, b) => b.some((key) => a.includes(key))

const everyMedia = (
  props,
  value,
  wrapper = identity
) => {
  const media = getThemeMedia(props)

  if (isObj(value) && has(Object.keys(media), Object.keys(value))) {
    return mapObj((k, v) => wrapIfMedia(media[k], wrapper(v)), value)
  }

  return wrapper(value)
}

export {
  everyMedia
}
