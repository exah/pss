import { toPairs, F } from 'ramda'
import { wrapIfMedia, themeMedia } from '../utils'

const everyMedia = (props, fn) => toPairs(themeMedia(props)).map(fn)

const everyMediaStyle = (props, getStyle = F) => everyMedia(
  props,
  ([ mediaKey, mediaQuery ]) => {
    const style = getStyle(mediaKey)
    return style ? wrapIfMedia(mediaQuery, style) : {}
  }
)

export {
  everyMedia,
  everyMediaStyle
}
