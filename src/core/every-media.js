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
  getterOrValue,
  wrapper = identity
) => (props) => {
  const themeValue = isFn(getterOrValue) ? getterOrValue(props) : getterOrValue

  if (isFn(themeValue)) {
    return everyMedia((mediaKey) => wrapper(themeValue(mediaKey)))(props)
  }

  return wrapper(themeValue)
}

export {
  everyMedia,
  everyMediaValue
}
