import { curryN } from 'ramda'
import { wrapIfMedia, themeMedia, getStyles } from '../utils'

const onMedia = curryN(3, (mediaKey, style, props) => wrapIfMedia(
  themeMedia(props.theme)[mediaKey],
  getStyles(style, props, mediaKey)
))

export { onMedia }
