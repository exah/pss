import { compose, path } from '@exah/utils'
import { DEFAULT_KEY, MEDIA_KEY } from '../constants'

/**
 * ```js
 * import { themePath } from 'pss'
 * ```
 *
 * Get value from theme.
 *
 * @example
 * import { themePath } from 'pss'
 *
 * const Box = styled.div`
 *   width: ${themePath('size.card')};
 *   background-color: ${themePath('color.red', 'hotpink')};
 * `
 *
 * <Box /> // → width: 200px; background-color: hotpink;
 */

export const themePath = (input, defaultValue) =>
  (props = {}) => path(input, defaultValue)(props.theme)

export const getDefault = (input, defaultValue = DEFAULT_KEY) =>
  themePath([ DEFAULT_KEY, input ], defaultValue)

export const getThemeMedia = themePath(MEDIA_KEY, {})
export const getMedia = (input) => compose(path(input), getThemeMedia)
