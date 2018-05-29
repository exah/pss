// @flow
import { keys, toPairs, once } from 'ramda'
import { wrapIfMedia, getStyles, themeMedia, toArr } from '../utils'

type Style = { [string]: string | number }
type Styles = Array<Style>

const reduceStyles = (fn: Function) => (acc, [ styles, ...rest ]): Styles => acc.concat(
  toArr(styles)
    .map((style) => fn(style, ...rest))
    .filter((style) => style != null)
)

const propStyles = (stylesMap: Object): Function => (props: Object): Styles =>
  toPairs(props)
    .map(([ key, val ]) => [ stylesMap[key], val ])
    .reduce(reduceStyles((style, val) => getStyles(style, val, props)), [])

const buildMediaRegEx = once((media: Object) =>
  new RegExp('(' + keys(media).join('|') + ')?$')
)

const mediaPropStyles = (stylesMap: Object, label: string) => (props: Object): Styles => {
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
