// @flow

import type {
  Styles,
  Props,
  DynamicStyleFn,
  PropStylesObj
} from '../types'

import {
  isFn,
  toArr,
  reduceObj,
  memoize
} from '@exah/utils'

import {
  wrapIfMedia,
  handlePropStyle,
  hasMediaKeys
} from '../utils/helpers'

import {
  themeMedia,
  themeDefaultMedia
} from '../utils/getters'

import {
  DEFAULT_KEY
} from '../constants'

const DEFAULT_OPTIONS = {
  isMediaProps: true
}

const propStylesWithMedia = (styles: PropStylesObj) => (media: Array<string>): PropStylesObj => {
  const mediaKeys = toArr(media).map((mediaKey) =>
    mediaKey === DEFAULT_KEY ? '' : mediaKey
  )

  return Object.keys(styles).reduce((propsAcc, propName) => ({
    ...propsAcc,
    ...mediaKeys.reduce((mediaAcc, mediaKey) => ({
      ...mediaAcc,
      [propName + mediaKey]: [
        styles[propName],
        mediaKey || null
      ]
    }), {})
  }), {})
}

/**
 * ```js
 * import { createPropStyles } from 'pss'
 * ```
 *
 * Function that accepts Object (see {@link PropStylesObj}) with keys that
 * represents component `prop` and the value is a `style` that will be applied.
 *
 * Returns Function (see {@link DynamicStyleFn}) that you add to
 * components created with CSS-in-JS libraries.
 *
 * When `theme` with `media` is provided to components, any styles can be changed
 * in media query with media name suffix (key in `theme.media`).
 *
 * @param [options = { isMediaProps: true }]
 *
 * @example
 * import styled from 'react-emotion'
 * import { createPropStyles } from 'pss'
 *
 * // Create prop styles
 * const myPropStyle = createPropStyles({
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
 *     M: '(max-width: 600px)'
 *   }
 * }
 *
 * // Add theme to ThemeProvider
 * <ThemeProvider theme={theme}>
 *   <Box hideM /> // @media (max-width: 600px) { display: none }
 * </ThemeProvider>
 */

const createPropStyles = (
  propStyles: PropStylesObj = {},
  options?: { isMediaProps: boolean }
): DynamicStyleFn => {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  const propStylesWithMediaMemoized = memoize(propStylesWithMedia(propStyles))

  return (props: Props): Styles => {
    const media = themeMedia(props.theme)
    const mediaKeys = Object.keys(media)
    const isMedia = opts.isMediaProps && themeDefaultMedia(props.theme) !== false
    const stylesMap = isMedia ? propStylesWithMediaMemoized(mediaKeys) : propStyles

    const getStylesFromProps = reduceObj((acc, propName, propValue) => {
      const matched = stylesMap[propName]

      if (matched !== undefined) {
        const [ propStyle, mediaKey ] = isMedia ? matched : [ matched ]
        const mediaQuery = media[mediaKey]

        return acc.concat(toArr(propStyle).map(function mapPropStyles (style) {
          // selectors
          if (isFn(propValue)) {
            return wrapIfMedia(
              mediaQuery,
              propValue(props, mediaKey, style)
            )
          } else {
            // like: { default: 0, M: 1 }
            if (hasMediaKeys(mediaKeys, propValue)) {
              return reduceObj((subAcc, key, value) => subAcc.concat(
                wrapIfMedia(
                  media[key],
                  handlePropStyle(style, value, props, key)
                ) || []
              ), propValue, [])
            }

            return wrapIfMedia(
              mediaQuery,
              handlePropStyle(style, propValue, props, mediaKey)
            ) || []
          }
        }))
      }

      return acc
    })

    return getStylesFromProps(props, [])
  }
}

export {
  createPropStyles
}
