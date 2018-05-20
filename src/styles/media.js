import { curryN } from 'ramda'
import { wrapIfMedia, themeMedia, getStyles } from '../utils'

export const onMedia = curryN(3, (mediaKey, style, props) => wrapIfMedia(
  themeMedia(props)[mediaKey],
  getStyles(props, mediaKey)
))
