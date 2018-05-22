import { toPairs } from 'ramda'
import { SHORT_DIRECTIONS } from '../constants'
import { getSpace, toArr, toObj, toCssRule } from '../utils'
import { everyMedia } from './every-media'

const buildDirectionModifiers = (cssPropName, shortName = '') => [
  ...toPairs(SHORT_DIRECTIONS).map(([ shortDir, longDir ]) => [
    shortName + shortDir,
    toArr(longDir).map((dir) => cssPropName + dir)
  ]),
  [ shortName, [ cssPropName ] ]
]

const cssRuleSpaceStyle = (cssProp) => (value) => ({ theme }, mainMediaKey) => {
  const spaceValue = getSpace(theme, value)

  if (mainMediaKey != null) {
    return toCssRule(cssProp, spaceValue(mainMediaKey))
  }

  return everyMedia(
    (mediaKey) => toCssRule(cssProp, spaceValue(mediaKey, true)),
    { theme }
  )
}

const spaceStyle = (cssPropBaseName) => {
  const baseStyle = cssRuleSpaceStyle(cssPropBaseName)
  const modifiers = buildDirectionModifiers(cssPropBaseName)

  return Object.assign(
    baseStyle,
    toObj(modifiers, ([ modName, cssProp ]) => !modName ? null : ({
      [modName]: cssRuleSpaceStyle(cssProp)
    }))
  )
}

const spaceProps = (cssPropBaseName, compPropBaseName) => {
  const modifiers = buildDirectionModifiers(cssPropBaseName, compPropBaseName)

  return toObj(modifiers, ([ modName, cssProp ]) => {
    const style = cssRuleSpaceStyle(cssProp)
    return {
      [modName]: (value, compProps, mediaKey) => style(value)(compProps, mediaKey)
    }
  })
}

export {
  spaceStyle,
  spaceProps
}
