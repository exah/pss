import { curryN } from 'ramda'
import { getTextStyle } from '../utils'
import { everyMedia } from './every-media'

const textStyle = curryN(2, (name, { theme }, propMediaKey) => {
  const style = getTextStyle(theme, name)
  const defaultMediaStyle = style(true)

  if (defaultMediaStyle) {
    return everyMedia(
      (mediaKey) => style(mediaKey) || defaultMediaStyle,
      { theme }
    )
  }

  return style(propMediaKey)
})

export { textStyle }
