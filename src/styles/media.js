import { curryN } from 'ramda'
import { wrapIfMedia, themeMedia, getStyles } from '../utils'

const onMedia = curryN(2, (mediaKey, style) => (props) => wrapIfMedia(
  themeMedia(props)[mediaKey],
  getStyles(props, mediaKey)
))

export { onMedia }
