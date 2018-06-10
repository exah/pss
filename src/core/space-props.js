// @flow
import { SHORT_DIRECTIONS } from '../constants'
import { getSpace, toArr, toObj, toCssRule } from '../utils'
import { everyMedia } from './every-media'

import type {
  CSSProp,
  DynamicStyle,
  CompPropName,
  PropStyles
} from '../types'

type SpaceProps = Array<Array<CompPropName|Array<CSSProp>>>

const buildDirectionModifiers = (
  styleProp: CSSProp,
  compProp: CompPropName = ''
): SpaceProps => [
  ...Object.entries(SHORT_DIRECTIONS).map(([ shortDir, longDir ]) => [
    compProp + shortDir,
    toArr(longDir).map((dir) => styleProp + dir)
  ]),
  [ compProp, [ styleProp ] ]
]

const cssRuleSpaceStyle = (
  styleProp: CSSProp
): Function => (value): DynamicStyle => ({ theme }, propMediaKey) => {
  const cssRule = toCssRule(styleProp)
  const spaceValue = getSpace(theme, value)

  if (propMediaKey != null) {
    return cssRule(spaceValue(propMediaKey))
  }

  return everyMedia(
    (mediaKey) => cssRule(spaceValue(mediaKey, true)),
    { theme }
  )
}

const spaceStyle = (stylePropPrefix: CSSProp): DynamicStyle => {
  const baseStyle = cssRuleSpaceStyle(stylePropPrefix)
  const modifiers = buildDirectionModifiers(stylePropPrefix)

  return Object.assign(
    baseStyle,
    toObj(modifiers, ([ modName, styleProp ]) => !modName ? null : ({
      [modName]: cssRuleSpaceStyle(styleProp)
    }))
  )
}

const spaceProps = (
  stylePropPrefix: CSSProp,
  compPropPrefix: CompPropName
): PropStyles => {
  const modifiers = buildDirectionModifiers(stylePropPrefix, compPropPrefix)

  return toObj(modifiers, ([ modName, styleProp ]) => {
    const style = cssRuleSpaceStyle(styleProp)
    return {
      [modName]: (value, compProps, mediaKey) => style(value)(compProps, mediaKey)
    }
  })
}

export {
  spaceStyle,
  spaceProps
}
