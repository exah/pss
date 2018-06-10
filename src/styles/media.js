import { wrapIfMedia, themeMedia, isFn, curryN } from '../utils'

const onMedia = curryN(3, (mediaKey, style, props) => wrapIfMedia(
  themeMedia(props.theme)[mediaKey],
  isFn(style) ? style(props, mediaKey) : style
))

export { onMedia }
