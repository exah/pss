import { getMedia } from '../getters'

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
 *
 * const Box = styled.div`
 *   ${mq('sm')} {
 *     background-color: ${themePath('color.red', 'hotpink')};
 *   }
 * `
 *
 * <Box /> // → @media (max-width: 600px) { background-color: red; }
 */

export const mq = (mediaKey = 'default', fallback = 'all') =>
  (props) => `@media ${getMedia(mediaKey, fallback)(props)}`
