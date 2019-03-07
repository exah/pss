import { getMedia } from '../utils'

/**
 * ```js
 * import { mq } from 'pss'
 * ```
 *
 * @param [mediaKey] — key in `theme.media`
 *
 * @example
 * import { mq, themePath } from 'pss'
 *
 * const Box = styled.div`
 *   \@media ${mq('sm')} {
 *     background-color: ${themePath('color.red', 'hotpink')};
 *   }
 * `
 *
 * <Box /> // → @media (max-width: 600px) { background-color: red; }
 */

export const mq = (mediaKey, fallback = 'all') =>
  (props) => (getMedia(mediaKey)(props) || fallback)
