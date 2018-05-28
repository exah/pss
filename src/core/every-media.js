import { toPairs, curryN } from 'ramda'
import { wrapIfMedia, themeMedia } from '../utils'

const everyMedia = curryN(2, (getStyle, props) =>
  toPairs(themeMedia(props.theme))
    .map(([ mediaKey, mediaQuery ]) => wrapIfMedia(
      mediaQuery,
      getStyle(mediaKey, props)
    ))
    .filter((style) => style != null)
)

export { everyMedia }
