// @flow
import { keys, toPairs, once } from 'ramda'
import { wrapIfMedia, getStyles, themeMedia, toArr } from '../utils'

import type {
  CompProps,
  Styles,
  DynamicStyle,
  PropStyle,
  PropStylesMap
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
 * import { propStyles } from '@exah/prop-styles-system'
 *
 * @example
 * // Create prop-styles as { prop: style } pairs
 * const myPropStyles = propStyles({ red: { backgroundColor: 'red' } })
 *
 * // Add to styled-component
 * const Box = styled.div(myPropStyles)
 *
 * // Use
 * <Box red />
 *
 * @example
 * element {
 *   background-color: red;
 * }
 */

const propStyles = (
  stylesMap: PropStylesMap = {}
): DynamicStyle => (props: CompProps): Styles =>
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
 * import { mediaPropStyles } from '@exah/prop-styles-system'
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
 * const myPropStyle = mediaPropStyles({
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
 * @example
 *
 * element {
 *   backgroundColor: #000;
 *
 *   \@media (max-width: 600px) {
 *     backgroundColor: red;
 *     display: none;
 *   }
 * }
 */

const mediaPropStyles = (
  stylesMap: PropStylesMap = {},
  label: string
): DynamicStyle => (props: CompProps): Styles => {
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
