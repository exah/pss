// @flow

import type {
  Styles,
  Props,
  ThemeObj,
  DynamicStyleFn,
  PropStylesObj
} from '../types'

import { isFn } from '../utils/is'
import { once } from '../utils/fns'

import {
  toArr,
  wrapIfMedia,
  handlePropStyle
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

const buildStylesWithMedia = (styles: PropStylesObj) => (theme: ThemeObj): PropStylesObj => {
  const media = themeMedia(theme)
  const mediaKeys = Object.keys(media).map((mediaKey) =>
    mediaKey === DEFAULT_KEY ? '' : mediaKey
  )

  return Object.keys(styles).reduce((propsAcc, propName) => ({
    ...propsAcc,
    ...mediaKeys.reduce((mediaAcc, mediaKey) => ({
      ...mediaAcc,
      [propName + mediaKey]: [
        styles[propName],
        mediaKey || null,
        media[mediaKey]
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
 * import { createTheme } from 'pss'
 *
 * // Create theme with media queries
 * const theme = createTheme({
 *   media: {
 *     M: '(max-width: 600px)'
 *   }
 * })
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
  const buildStylesWithMediaOnce = once(buildStylesWithMedia(propStyles))

  return (props: Props): Styles => {
    const isMedia = opts.isMediaProps && themeDefaultMedia(props.theme) !== false
    const stylesMap = isMedia ? buildStylesWithMediaOnce(props.theme) : propStyles

    const result = Object.keys(props).reduce((acc, key) => {
      const matched = stylesMap[key]

      if (matched !== undefined) {
        const [ propStyle, mediaKey, mediaQuery ] = isMedia ? matched : [ matched ]
        const value = props[key]

        return acc.concat(
          toArr(propStyle).map((style) => wrapIfMedia(
            mediaQuery,
            isFn(value)
              ? value(props, mediaKey, style)
              : handlePropStyle(style, value, props, mediaKey)
          ) || [])
        )
      }

      return acc
    }, [])

    return result
  }
}

export {
  createPropStyles
}
