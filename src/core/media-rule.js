// @flow

import type { StyleValue, Props } from '../types'
import { path, identity } from '@exah/utils'
import { DEFAULT_KEY } from '../constants'
import { getMedia } from '../getters'
import { wrapIfMedia } from '../utils'

/**
 * ```js
 * import { mediaRule } from 'pss'
 * ```
 *
 * Create style wrapped in `theme.media`.
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
 * // Add theme to ThemeProvider
 * <ThemeProvider theme={theme}>
 *   <Box hideOn='sm' /> // @media (max-width: 600px) { display: 'none' }
 * </ThemeProvider>
 */

export const mediaRule = (
  cssProp: string,
  value: StyleValue,
  transformValue: Function = identity
) => (input: string | boolean, props: Props, propMediaKey: string) => {
  if (!input) return null

  const style = {
    [cssProp]: transformValue(value, props)
  }

  if (propMediaKey != null && input === true) return style

  const mediaKey = input === true ? DEFAULT_KEY : input
  const media = path(mediaKey)(getMedia(props))

  if (!media) return null
  return wrapIfMedia(media, style)
}
