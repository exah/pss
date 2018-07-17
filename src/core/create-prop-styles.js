// @flow

import type {
  Styles,
  Props,
  ThemeObj,
  DynamicStyleFn,
  PropStylesObj
} from '../types'

import {
  isFn,
  toArr,
  once,
  wrapIfMedia,
  handlePropStyle,
  themeMedia
} from '../utils'

import {
  DEFAULT_KEY
} from '../constants'

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
 * import { createPropStyles } from '@exah/prop-styles-system'
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
 * @example
 * import styled from 'react-emotion'
 * import { createPropStyles } from '@exah/prop-styles-system'
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
 * import { createTheme } from '@exah/prop-styles-system'
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

const createPropStyles = (propStyles: PropStylesObj = {}): DynamicStyleFn => {
  const buildStylesWithMediaOnce = once(buildStylesWithMedia(propStyles))

  return (props: Props): Styles => {
    const stylesWithMedia = buildStylesWithMediaOnce(props.theme)

    const result = Object.keys(props).reduce((acc, key) => {
      const matched = stylesWithMedia[key]

      if (matched !== undefined) {
        const [ propStyle, mediaKey, mediaQuery ] = matched
        const value = props[key]

        return acc.concat(
          toArr(propStyle).map((style) => wrapIfMedia(
            mediaQuery,
            isFn(value)
              // $FlowFixMe - Shitty FlowType don't recognize imported `isFn`
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
