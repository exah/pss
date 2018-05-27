import { curryN } from 'ramda'
import { getTextStyle, isFn } from '../utils'
import { everyMedia } from '../core'

const textStyle = curryN(2, (name, { theme }, propMediaKey) => {
  const themeStyle = getTextStyle(theme, name)

  if (isFn(themeStyle)) {
    if (propMediaKey === null) {
      return everyMedia((mediaKey) => themeStyle(mediaKey), { theme })
    }
    return themeStyle(propMediaKey)
  }

  return themeStyle
})

export { textStyle }
