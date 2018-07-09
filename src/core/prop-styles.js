// @flow

import type {
  Styles,
  Props,
  DynamicStyleFn,
  PropStylesObj
} from '../types'

import { DEFAULT_KEY } from '../constants'

import {
  isFn,
  toArr,
  once,
  wrapIfMedia,
  handlePropStyle,
  themeMedia
} from '../utils'

const buildStylesWithMedia = (styles: PropStylesObj) => (theme: Object): PropStylesObj => {
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
 * Function that accepts {@link PropStylesObj} and returns {@link DynamicStyleFn}
 * that will be used when creating components with CSS-in-JS libraries.
 *
 * @example
 * import { createPropStyles } from '@exah/prop-styles-system'
 *
 * @example
 * // Create theme with defined media queries
 * const theme = createTheme({
 *   media: {
 *     M: '(max-width: 600px)'
 *   }
 * })
 *
 * // Create media aware props style
 * const myPropStyle = createPropStyles({
 *   hide: { display: 'none' }
 * })
 *
 * // Add to styled-component
 * const Box = styled.div(myPropStyle)
 *
 * // Use in component with ThemeProvider (or theme prop)
 * <ThemeProvider theme={theme}>
 *   <Box bg='#000' bgM hideM />
 * </ThemeProvider>
 *
 *
 * @example
 *
 * .element {
 *   background-color: #000;
 * }
 *
 * \@media (max-width: 600px) {
 *   .element {
 *     background-color: red;
 *     display: none;
 *   }
 * }
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
              ? value(style, props, mediaKey)
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
  createPropStyles,
  createPropStyles as propStylesSystem // COMPAT
}
