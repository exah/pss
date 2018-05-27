import { keys, toPairs, once } from 'ramda'
import { wrapIfMedia, getStyles, themeMedia, toArr } from '../utils'

const reduceStyles = (fn) => (acc, [ styles, ...rest ]) => acc.concat(
  toArr(styles)
    .map((style) => fn(style, ...rest))
    .filter((style) => style != null)
)

const propStyles = (stylesMap) => (props) =>
  toPairs(props)
    .map(([ key, val ]) => [ stylesMap[key], val ])
    .reduce(reduceStyles((style, val) => getStyles(style, val, props)), [])

const buildMediaRegEx = once((media) =>
  new RegExp('(' + keys(media).join('|') + ')?$')
)

const mediaPropStyles = (stylesMap, label) => (props) => {
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
