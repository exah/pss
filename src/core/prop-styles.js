// @flow
import { once } from 'ramda'
import { DEFAULT_KEY } from '../constants'
import { wrapIfMedia, getStyles, themeMedia, toArr } from '../utils'

import type {
  Styles,
  CompProps,
  DynamicStyle,
  PropStyles
} from '../types'

const buildStylesWithMedia = (styles: PropStyles) => (theme: Object): PropStyles => {
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
 * Create prop-styles
 *
 * @example
 * import { propStylesSystem } from '@exah/prop-styles-system'
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
 * const myPropStyle = propStylesSystem({
 *   hide: { display: 'none' },
 *   bg: (val, props, mediaKey) => ({
 *     backgroundColor: val === true ? mediaKey === 'M' ? 'red' : 'blue' : val
 *   })
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

const propStylesSystem = (
  styles: PropStyles = {},
  label: string
): DynamicStyle => {
  const buildStylesWithMediaOnce = once(buildStylesWithMedia(styles))

  return (props: CompProps): Styles => {
    const stylesWithMedia = buildStylesWithMediaOnce(props.theme)

    const result = Object.keys(props)
      .reduce((acc, key) => {
        const matched = stylesWithMedia[key]

        if (matched !== undefined) {
          const [ style, mediaKey, mediaQuery ] = matched

          return acc.concat(
            toArr(style).map((_style) => wrapIfMedia(
              mediaQuery,
              getStyles(_style, props[key], props, mediaKey)
            ) || [])
          )
        }

        return acc
      }, [])

    return label ? [ { label }, ...result ] : result
  }
}

export {
  propStylesSystem
}
