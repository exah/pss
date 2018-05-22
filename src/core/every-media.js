import { toPairs, curryN } from 'ramda'
import { wrapIfMedia, themeMedia } from '../utils'

const everyMedia = curryN(2, (getStyle, props) =>
  toPairs(themeMedia(props.theme)).map(
    ([ mediaKey, mediaQuery ]) => {
      const style = getStyle(mediaKey)
      return style ? wrapIfMedia(mediaQuery, style) : {}
    }
  )
)

export { everyMedia }
