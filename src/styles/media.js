import { isFn, curryN } from '@exah/utils'
import { wrapIfMedia } from '../utils/helpers'
import { themeMedia } from '../utils/getters'

const onMedia = curryN(3, (mediaKey, style, props) => wrapIfMedia(
  themeMedia(props)[mediaKey],
  isFn(style) ? style(props, mediaKey) : style
))

export { onMedia }
