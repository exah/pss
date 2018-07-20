import { isFn } from '../utils/is'
import { curryN } from '../utils/fns'
import { wrapIfMedia } from '../utils/helpers'
import { themeMedia } from '../utils/getters'

const onMedia = curryN(3, (mediaKey, style, props) => wrapIfMedia(
  themeMedia(props.theme)[mediaKey],
  isFn(style) ? style(props, mediaKey) : style
))

export { onMedia }
