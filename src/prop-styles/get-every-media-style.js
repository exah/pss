import { toPairs, F } from 'ramda'
import { wrapIfMedia, themeMedia } from '../utils'

const everyMedia = (props, fn) => toPairs(themeMedia(props)).map(fn)

export const getEveryMediaStyle = (props, getStyle = F) => everyMedia(
  props,
  ([ mediaKey, mediaQuery ]) => {
    const style = getStyle(mediaKey, props)
    return style ? wrapIfMedia(mediaQuery, style, props) : {}
  }
)
