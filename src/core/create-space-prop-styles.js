import { toPairs } from 'ramda'
import { SHORT_DIRECTIONS } from '../constants'
import { getSpace, toArr, toObj } from '../utils'
import { everyMediaStyle } from './every-media-style'

const toCssRule = (props, val) => val != null
  ? toObj(props, (name) => ({ [name]: val }))
  : null

const buildModifiers = (cssPropBaseName, baseModifier = '') => [
  ...toPairs(SHORT_DIRECTIONS).map(([ shortDir, longDir ]) => [
    baseModifier + shortDir,
    toArr(longDir).map((dir) => cssPropBaseName + dir)
  ]),
  [ baseModifier, [ cssPropBaseName ] ]
]

const getCssRuleStyle = (cssProp) => (value) => (compProps, mainMediaKey) => {
  const spaceValue = getSpace(compProps, value)

  if (mainMediaKey != null) {
    return toCssRule(cssProp, spaceValue(mainMediaKey))
  }

  return everyMediaStyle(
    compProps,
    (mediaKey) => toCssRule(cssProp, spaceValue(mediaKey, true))
  )
}

const createSpaceStyle = (cssPropBaseName) => {
  const baseStyle = getCssRuleStyle(cssPropBaseName)
  const modifiers = buildModifiers(cssPropBaseName)

  return Object.assign(
    baseStyle,
    toObj(modifiers, ([ modName, cssProp ]) => !modName ? null : ({
      [modName]: getCssRuleStyle(cssProp)
    }))
  )
}

const createSpaceProps = (cssPropBaseName, compPropBaseName) => {
  const modifiers = buildModifiers(cssPropBaseName, compPropBaseName)

  return toObj(modifiers, ([ modName, cssProp ]) => {
    const style = getCssRuleStyle(cssProp)
    return {
      [modName]: (value, compProps, mediaKey) => style(value)(compProps, mediaKey)
    }
  })
}

export {
  createSpaceStyle,
  createSpaceProps
}
