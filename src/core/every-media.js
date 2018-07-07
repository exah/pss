// @flow
import { wrapIfMedia, themeMedia, curryN } from '../utils'

import type {
  Styles,
  Props
} from '../types'

const everyMedia = curryN(2, (getStyle: Function, props: Props): Styles =>
  Object.entries(themeMedia(props.theme))
    .reduce((acc, [ mediaKey, mediaQuery ]) => acc.concat(wrapIfMedia(
      mediaQuery,
      getStyle(mediaKey, props)
    ) || []), [])
)

export { everyMedia }
