// @flow
import type {
  Styles,
  Props,
  Mixin,
  PropStyles
} from '../types'

import {
  isFn,
  toArr,
  reduceObj
} from '@exah/utils'

import {
  ALL_MEDIA_KEY
} from '../constants'

import {
  getMedia,
  getThemeMedia
} from '../getters'

import {
  keys,
  wrapIfMedia,
  handlePropStyle,
  hasMediaKeys
} from '../utils'

/**
 * ```js
 * import pss from 'pss'
 * ```
 *
 * Function that accepts Object (see {@link PropStyles}) with keys that
 * represents component `prop` and the value is a `style` that will be applied.
 *
 * Returns Function (see {@link Mixin}) that you add to
 * components created with CSS-in-JS libraries.
 *
 * When `theme` with `media` is provided to components, any styles can be changed
 * in media query with media name suffix (key in `theme.media`).
 *
 * @example
 * import styled from 'react-emotion'
 * import pss from 'pss'
 *
 * // Create prop styles
 * const myPropStyle = pss({
 *   display: value => ({ display: value }),
 *   flex: { display: 'flex' },
 *   inline: { display: 'inline-block' },
 *   hide: { display: 'none' }
 * })
 *
 * // Add to component
 * const Box = styled.div(myPropStyle)
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
 *   <Box display='flex' hide={{ sm: true }} />
 * </ThemeProvider>
 *
 * // { display: flex }
 * // @media (max-width: 600px) { display: none }
 */

const createPropStyles = (
  propStyles: PropStyles = {}
): Mixin => (props: Props): Styles => {
  const media = getThemeMedia(props)
  const mediaKeys = keys(media)

  function mapPropStyles (input, mediaKey, style) {
    // selectors
    if (isFn(input)) {
      return wrapIfMedia(
        getMedia(mediaKey, media),
        input(props, mediaKey, style)
      )
    }

    // value with `theme.media` keys: { all: 0, M: 1 }
    if (hasMediaKeys(mediaKeys, keys(input))) {
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
      getMedia(mediaKey, media),
      handlePropStyle(style, input, props, mediaKey)
    )
  }

  return reduceObj(
    (acc, propName, propValue) => acc.concat(
      toArr(propStyles[propName])
        .map((style) => mapPropStyles(propValue, null, style) || [])
    ),
    props,
    []
  )
}

export {
  createPropStyles
}
