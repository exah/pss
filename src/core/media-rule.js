import { identity } from '@exah/utils'
import { DEFAULT_MEDIA_KEY } from '../constants'
import { getMedia } from '../getters'
import { wrapIfMedia } from '../utils'

/**
 * ```js
 * import { mediaRule } from 'pss'
 * ```
 *
 * Create style wrapped in `theme.media`.
 *
 * Related {@link display}.
 *
 * @param {string} cssProp
 * @param {string} value
 * @param {Function} [transformValue = identity]
 *
 * @example
 * import pss, { mediaRule } from 'pss'
 *
 * const Box = styled.div(pss({
 *   hideOn: mediaRule('display', 'none')
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

export const mediaRule = (
  cssProp,
  value,
  transformValue = identity
) => (input, props, propMediaKey) => {
  if (!input) return null

  const style = {
    [cssProp]: transformValue(value, props)
  }

  if (propMediaKey != null && input === true) return style

  const mediaKey = input === true ? DEFAULT_MEDIA_KEY : input
  const media = getMedia(mediaKey)(props)

  if (!media) return null
  return wrapIfMedia(media, style)
}
