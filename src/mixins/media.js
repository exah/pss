import { isFn, curryN } from '@exah/utils'
import { wrapIfMedia } from '../utils'
import { getThemeMedia } from '../getters'

const onMedia = curryN(3, (mediaKey, style, props) => wrapIfMedia(
  getThemeMedia(props)[mediaKey],
  isFn(style) ? style(props, mediaKey) : style
))

export { onMedia }
