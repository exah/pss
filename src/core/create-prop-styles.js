import {
  isFn,
  toArr,
  reduceObj
} from '@exah/utils'

import {
  MEDIA_KEY,
  ALL_MEDIA_KEY
} from '../constants'

import {
  getMedia,
  getDefault,
  getThemeMedia
} from '../getters'

import {
  keys,
  wrapIfMedia,
  handlePropStyle,
  hasMediaKeys
} from '../utils'

import {
  styleValuePropType
} from '../prop-types'

/**
 * ```js
 * import pss from 'pss'
 * ```
 *
 * Function that accepts Object with keys that represents component `prop` and
 * the value is a `style` that will be applied.
 *
 * If value is function it accepts following parameters:
 * - `input` - prop value
 * - `props` {@link Object} - component props, including `theme`
 * - `mediaKey` {@link Object} - key in `theme.media` used as prop value
 *
 * By default styles applied without media query.
 * But if you use object with `key` in `theme.media` as prop value, style will be applied in matched media.
 *
 * @param {Object} [styles = {}]
 * @return {Function} for styled components.
 *
 * @example
 * import pss from 'pss'
 *
 * // Create prop styles
 * const myPropStyle = pss({
 *   display: value => ({ display: value }),
 *   flex: { display: 'flex' },
 *   inline: { display: 'inline-block' },
 *   hide: { display: 'none' },
 *   size: (value, props, mediaKey) => ({
 *     width: mediaKey === 'sm' && value === true ? '100%' : value
 *   })
 * })
 *
 * // Add to component
 * const Box = styled.div`
 *   ${myPropStyle}
 * `
 *
 * // Use in component
 * <Box flex /> // .css { display: 'flex' }
 * <Box inline /> // .css { display: inline-block }
 * <Box display='inline-flex' /> // .css { display: inline-flex }
 *
 *
 * @example
 * import { ThemeProvider } from 'emotion-theming'
 *
 * // Create theme with media queries
 * const theme = {
 *   media: {
 *     sm: '(max-width: 600px)'
 *   }
 * }
 *
 * // Add theme to ThemeProvider
 * <ThemeProvider theme={theme}>
 *   <Box display='flex' hide={{ sm: true }} /> // → display: flex; @media (max-width: 600px) { display: none }
 *   <Box size={{ all: '100px', sm: true }} /> // → width: 100px; @media (max-width: 600px) { width: 100% }
 * </ThemeProvider>
 */

export function createPropStyles (styles) {
  function propStyles (props) {
    const media = getThemeMedia(props)
    const defaultMediaKey = getDefault(MEDIA_KEY)(props)

    function mapPropStyles (input, mediaKey, style) {
      const mediaQuery = getMedia(
        mediaKey === undefined ? defaultMediaKey : mediaKey,
        media
      )

      // selectors
      if (isFn(input)) {
        return wrapIfMedia(
          mediaQuery,
          input(props, mediaKey, style)
        )
      }

      // value with `theme.media` keys: { all: 0, M: 1 }
      if (hasMediaKeys(media, keys(input))) {
        return reduceObj(
          (acc, key, value) => acc.concat(
            mapPropStyles(value, (key === ALL_MEDIA_KEY ? null : key), style)
          ),
          input,
          []
        )
      }

      // general prop style
      return wrapIfMedia(
        mediaQuery,
        handlePropStyle(style, input, props, mediaKey)
      )
    }

    return reduceObj(
      (acc, propName, propValue) => acc.concat(
        toArr(styles[propName])
          .map((style) => mapPropStyles(propValue, undefined, style) || [])
      ),
      props,
      []
    )
  }

  const propTypes = reduceObj((acc, key) => ({
    ...acc,
    [key]: styleValuePropType
  }), styles)

  return Object.assign(propStyles, { propTypes })
}
