// @flow
import { toPairs, curryN } from 'ramda'
import { wrapIfMedia, themeMedia } from '../utils'

import type {
  Styles,
  CompProps
} from '../types'

const everyMedia = curryN(2, (getStyle: Function, props: CompProps): Styles =>
  toPairs(themeMedia(props.theme))
    .map(([ mediaKey, mediaQuery ]) => wrapIfMedia(
      mediaQuery,
      getStyle(mediaKey, props)
    ))
    .filter((style) => style != null)
)

export { everyMedia }
