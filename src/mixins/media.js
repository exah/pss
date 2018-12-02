import { isFn, curryN } from '@exah/utils'
import { wrapIfMedia } from '../utils'
import { getMedia } from '../getters'

const onMedia = curryN(3, (mediaKey, style, props) => wrapIfMedia(
  getMedia(mediaKey)(props),
  isFn(style) ? style(props, mediaKey) : style
))

/**
 * ```js
 * import { mq } from 'pss'
 * ```
 *
 * Get value from theme.
 *
 * @param [mediaKey] — key in `theme.media`
 *
 * @example
 * import { mq, themePath } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Box = styled.div`
 *   ${mq('sm')} {
 *     background-color: ${themePath('color.red', 'hotpink')};
 *   }
 * `
 *
 * <Box /> // → @media (max-width: 600px) { background-color: red; }
 */

const mq = (mediaKey = 'default', fallback = 'all') =>
  (props) => `@media ${getMedia(mediaKey, fallback)(props)}`

export { onMedia, mq }
