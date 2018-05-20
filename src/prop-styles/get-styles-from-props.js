import { keys, toPairs, once } from 'ramda'
import { wrapIfMedia, getStyles, themeMedia } from '../utils'

export const getStylesFromProps = (stylesMap) => (props) =>
  toPairs(props).map(([ key, val ]) =>
    getStyles(stylesMap[key], val, props)
  )

const buildMediaRegEx = once((media) =>
  new RegExp('(' + keys(media).join('|') + ')?$')
)

export const getStylesFromPropsWithMedia = (stylesMap, label) => (props) => {
  const media = themeMedia(props)
  const mediaRegEx = buildMediaRegEx(media)
  const result = toPairs(props)
    .map(([ key, val ]) => {
      if (stylesMap[key]) return [ stylesMap[key], val ]

      const [ styleKey, mediaKey ] = key.split(mediaRegEx)
      return [ stylesMap[styleKey], val, mediaKey ]
    })
    .map(([ style, val, mediaKey ]) => wrapIfMedia(
      media[mediaKey],
      getStyles(style, val, props, mediaKey)
    ))

  return label ? [ { label }, ...result ] : result
}
