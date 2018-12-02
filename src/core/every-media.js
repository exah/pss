// @flow

import { isFn, identity, reduceObj } from '@exah/utils'
import { wrapIfMedia } from '../utils'
import { getThemeMedia } from '../getters'

const everyMedia = (getStyle: Function) => (props: {}) => reduceObj(
  (acc, mediaKey, mediaQuery) => acc.concat(
    wrapIfMedia(mediaQuery, getStyle(mediaKey)) || []
  ),
  getThemeMedia(props),
  []
)

const everyMediaValue = (
  getterOrValue: *,
  wrapper: Function = identity
) => (props: {}) => {
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
