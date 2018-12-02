import { isFn, curryN } from '@exah/utils'
import { wrapIfMedia } from '../utils'
import { getMedia } from '../getters'

const onMedia = curryN(3, (mediaKey, style, props) => wrapIfMedia(
  getMedia(mediaKey)(props),
  isFn(style) ? style(props, mediaKey) : style
))

export { onMedia }
