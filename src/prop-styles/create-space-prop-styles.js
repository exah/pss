import { toPairs } from 'ramda'
import { SHORT_DIRECTIONS } from '../constants'
import { getSpace, toArr } from '../utils'
import { everyMediaStyle } from './every-media-style'

const toCssRule = (props, val) => val == null ? null : toArr(props).reduce(
  (acc, name) => ({ ...acc, [name]: val }),
  {}
)

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
    modifiers.reduce((acc, [ modName, cssProp ]) => !modName ? acc : ({
      ...acc,
      [modName]: getCssRuleStyle(cssProp)
    }),
    {})
  )
}

const createSpaceProps = (cssPropBaseName, compPropBaseName) => {
  const modifiers = buildModifiers(cssPropBaseName, compPropBaseName)

  return modifiers.reduce(
    (acc, [ modName, cssProp ]) => {
      const style = getCssRuleStyle(cssProp)
      return {
        ...acc,
        [modName]: (value, compProps, mediaKey) => style(value)(compProps, mediaKey)
      }
    }, {}
  )
}

export {
  createSpaceStyle,
  createSpaceProps
}
