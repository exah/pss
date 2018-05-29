// @flow
import { curryN } from 'ramda'
import { getSize, sizeValue, toCssRule, isFn } from '../utils'
import { everyMedia } from './every-media'

const sizeProp = (cssProp: string, ...sizeValueArgs: Array<string | number>) => curryN(2,
  (propValue, { theme }, propMediaKey) => {
    const cssRule = toCssRule(cssProp)
    const size = sizeValue(propValue, ...sizeValueArgs)

    if (size !== propValue) {
      return cssRule(size)
    }

    const themeSize = getSize(theme, propValue)

    if (themeSize == null) {
      return cssRule(propValue)
    }

    if (isFn(themeSize)) {
      if (propMediaKey == null) {
        return everyMedia(
          (mediaKey) => cssRule(themeSize(mediaKey, true)),
          { theme }
        )
      }

      const mediaSize = themeSize(propMediaKey)
      return cssRule(mediaSize !== propValue ? mediaSize : propValue)
    }

    return cssRule(themeSize)
  }
)

const sizeStyle = (cssProp, ...sizeValueArgs) => (val = true, ...args) =>
  sizeProp(cssProp, ...sizeValueArgs)(val, ...args)

export { sizeStyle, sizeProp }
