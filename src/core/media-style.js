import { DEFAULT_MEDIA_KEY } from '../constants'
import { getMedia } from '../getters'
import { wrapIfMedia } from '../utils'

/**
 * ```js
 * import { mediaStyle } from 'pss'
 * ```
 *
 * Create style wrapped in `theme.media`.
 *
 * Related: {@link display}.
 *
 * @example
 * import pss, { mediaStyle } from 'pss'
 *
 * const Box = styled.div(pss({
 *   hideOn: mediaStyle({ display: 'none' })
 * }))
 *
 * @example
 * // Create theme with media queries
 * const theme = {
 *   media: {
 *     sm: '(max-width: 600px)'
 *   }
 * }
 *
 * <ThemeProvider theme={theme}>
 *   <Box hideOn='sm' /> // @media (max-width: 600px) { display: 'none' }
 * </ThemeProvider>
 */

export const mediaStyle = (style) => (input, props, propMediaKey) => {
  if (!input) return null

  if (propMediaKey != null && input === true) return style

  const mediaKey = input === true ? DEFAULT_MEDIA_KEY : input
  const media = getMedia(mediaKey)(props)

  if (media == null && input !== true) return null

  return wrapIfMedia(media, style)
}
