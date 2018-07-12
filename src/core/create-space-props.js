// @flow

import type {
  CSSProp,
  CompPropName,
  DynamicStyleFn,
  PropStylesObj
} from '../types'

import { SHORT_DIRECTIONS } from '../constants'
import { getSpace, toObj, toCssRule } from '../utils'
import { everyMedia } from './every-media'

type SpaceProps = Array<Array<CompPropName | Array<CSSProp>>>

const buildDirectionModifiers = (
  styleProp: CSSProp,
  compProp: CompPropName = ''
): SpaceProps => [
  ...Object.entries(SHORT_DIRECTIONS).map(([ shortDir, longDir ]: any) => [
    compProp + shortDir,
    longDir.map((dir) => styleProp + dir)
  ]),
  [ compProp, [ styleProp ] ]
]

const cssRuleSpaceStyle = (
  styleProp: CSSProp
): Function => (value): DynamicStyleFn => ({ theme }, propMediaKey) => {
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

const createSpaceStyle = (cssPropPrefix: CSSProp): DynamicStyleFn => {
  const baseStyle = cssRuleSpaceStyle(cssPropPrefix)
  const modifiers = buildDirectionModifiers(cssPropPrefix)

  return Object.assign(
    baseStyle,
    toObj(modifiers, ([ modName, styleProp ]) => !modName ? null : ({
      [modName]: cssRuleSpaceStyle(styleProp)
    }))
  )
}

/**
 * Create space prop for `margin`, `padding` or any CSS prop that have similiar signature.
 *
 * @param cssPropPrefix — Usually is `margin` or `padding`
 * @param compPropPrefix — Prop name that will be used for setting space value with CSS prop
 */

const createSpaceProps = (
  cssPropPrefix: CSSProp,
  compPropPrefix: CompPropName
): PropStylesObj => {
  const modifiers = buildDirectionModifiers(cssPropPrefix, compPropPrefix)

  return toObj(modifiers, ([ modName, styleProp ]) => {
    const style = cssRuleSpaceStyle(styleProp)
    return {
      [modName]: (value, compProps, mediaKey) => style(value)(compProps, mediaKey)
    }
  })
}

export {
  createSpaceStyle,
  createSpaceProps
}
