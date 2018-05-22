import { keys, toPairs, once } from 'ramda'
import { wrapIfMedia, getStyles, themeMedia } from '../utils'

const propStyles = (stylesMap) => (props) =>
  toPairs(props)
    .map(([ key, val ]) => [ stylesMap[key], val, props ])
    .filter(([ style ]) => style != null)
    .map((args) => getStyles(...args))

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
    .filter(([ style ]) => style != null)
    .map(([ style, val, mediaKey ]) => wrapIfMedia(
      media[mediaKey],
      getStyles(style, val, props, mediaKey)
    ))

  return label ? [ { label }, ...result ] : result
}

export {
  propStyles,
  mediaPropStyles
}
