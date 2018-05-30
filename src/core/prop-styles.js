// @flow
import { keys, toPairs, once } from 'ramda'
import { wrapIfMedia, getStyles, themeMedia, toArr } from '../utils'

import type {
  CompProps,
  Styles,
  PropStyle,
  PropStyles
} from '../types'

const reduceStyles = (
  fn: PropStyle
) => (acc, [ styles, ...rest ]): Styles => acc.concat(
  toArr(styles)
    .map((style) => fn(style, ...rest))
    .filter((style) => style != null)
)

/**
 * Creates basic prop-styles
 *
 * @example
 *
 * // Define style as props + styles pairs
 *
 * const Box = styled.div(propStyles({ hide: { display: 'none' } }))
 *
 *
 * // Use in component
 *
 * <Box hide />
 *
 *
 * // CSS-in-JS output
 *
 * element {
 *  display: 'none'
 * }
 */

const propStyles = (
  stylesMap: PropStyles
) => (props: CompProps): Styles =>
  toPairs(props)
    .map(([ key, val ]) => [ stylesMap[key], val ])
    .reduce(reduceStyles((style, val) => getStyles(style, val, props)), [])

const buildMediaRegEx = once((media: Object) =>
  new RegExp('(' + keys(media).join('|') + ')?$')
)

/**
 * Creates media prop-styles
 *
 * @example
 *
 * // Define style as props + styles pairs
 *
 * const Box = styled.div(mediaPropStyles({ hide: { display: 'none' } }))
 *
 *
 * // Use in component with theme prop (use top level ThemeProvider)
 *
 * const theme = createTheme({
 *  media: {
 *    M: '(max-width: 600px)'
 *  }
 * })
 *
 * <ThemeProvider theme={theme}>
 *   <Box hideM />
 * </ThemeProvider>
 *
 *
 * // CSS-in-JS output
 *
 * element {
 *  @media (max-width: 600px) {
 *    display: 'none'
 *  }
 * }
 */

const mediaPropStyles = (
  stylesMap: PropStyles,
  label: string
) => (props: CompProps): Styles => {
  const { theme, ...rest } = props

  const media = themeMedia(theme)
  const mediaRegEx = buildMediaRegEx(media)

  const result = toPairs(rest)
    .map(([ key, val ]) => {
      if (stylesMap[key]) return [ stylesMap[key], val ]

      const [ styleKey, mediaKey ] = key.split(mediaRegEx)
      return [ stylesMap[styleKey], val, mediaKey ]
    })
    .reduce(reduceStyles((style, val, mediaKey) => wrapIfMedia(
      media[mediaKey],
      getStyles(style, val, props, mediaKey)
    )), [])

  return label ? [ { label }, ...result ] : result
}

export {
  propStyles,
  mediaPropStyles
}
