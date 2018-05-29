// @flow
import { toPairs, curryN } from 'ramda'
import { wrapIfMedia, themeMedia } from '../utils'

const everyMedia = curryN(2, (getStyle: Function, props: Object): Array<Object> =>
  toPairs(themeMedia(props.theme))
    .map(([ mediaKey, mediaQuery ]) => wrapIfMedia(
      mediaQuery,
      getStyle(mediaKey, props)
    ))
    .filter((style) => style != null)
)

export { everyMedia }
