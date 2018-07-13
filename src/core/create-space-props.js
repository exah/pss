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
  styleProp: CSSProp,
  getSpaceValue: Function = getSpace,
  toPx = true
): Function =>
  (value, fnMediaKey): DynamicStyleFn =>
    (props, propMediaKey = fnMediaKey) => {
      const cssRule = toCssRule(styleProp)
      const spaceValue = getSpaceValue(props.theme, value)

      if (propMediaKey != null) {
        return cssRule(spaceValue(propMediaKey), toPx)
      }

      return everyMedia(
        (mediaKey) => cssRule(spaceValue(mediaKey, true), toPx),
        props
      )
    }

/**
 * ```js
 * import { createSpaceStyle } from '@exah/prop-styles-system'
 * ```
 *
 * Similar to {@link createSpaceProps}, but creates style function instead of prop styles,
 * that can be used inside CSS-in-JS components with `theme` prop.
 *
 * For example if `cssProp` = `margin` result is {@link DynamicStyleFn} with API:
 *
 * - `margin(step)` → `margin`
 * - `margin.l(step)` → `margin-left`
 * - `margin.r(step)` → `margin-right`
 * - `margin.t(step)` → `margin-top`
 * - `margin.b(step)` → `margin-bottom`
 * - `margin.x(step)` → `margin-left`, `margin-right`
 * - `margin.y(step)` → `margin-top`, `margin-bottom`
 *
 * @param cssProp — Usually is `margin` or `padding`
 * @param getSpaceValue — Custom getter from theme, default to get values from `theme.space`
 *
 * @example
 * import styled from 'react-emotion'
 * import { createSpaceStyle, createPropStyles } from '@exah/prop-styles-system'
 *
 * // Create `margin` space style fn
 * const margin = createSpaceStyle('margin')
 *
 * // Add to component
 * const Box = styled.div({ display: 'flex' }, margin.x(2))
 * const OtherBox = styled.div((props) => ({ display: 'flex', ...margin.l(1)(props) }))
 *
 * // Result
 * <Box /> // .css { display: flex; margin-left: 20px; margin-right: 20px; @media (max-width: 600px) { margin-left: 16px; margin-right: 16px } }
 * <OtherBox /> // .css { display: flex; margin-left: 10px; @media (max-width: 600px) { margin-left: 10px } }
 */

const createSpaceStyle = (cssProp: CSSProp, getSpaceValue: Function): DynamicStyleFn => {
  const baseStyle = cssRuleSpaceStyle(cssProp, getSpaceValue)
  const modifiers = buildDirectionModifiers(cssProp)

  return Object.assign(
    baseStyle,
    toObj(modifiers, ([ modName, styleProp ]) => !modName ? null : ({
      [modName]: cssRuleSpaceStyle(styleProp, getSpaceValue)
    }))
  )
}

/**
 * ```js
 * import { createSpaceProps } from '@exah/prop-styles-system'
 * ```
 *
 * Create space props for `margin`, `padding` or any CSS prop that have similiar signature.
 * Result is props for {@link createPropStyles} with specified prop prefix.
 *
 * - `{compProp}` → `{cssProp}`
 * - `{compProp}l` → `{cssProp}-left`
 * - `{compProp}r` → `{cssProp}-right`
 * - `{compProp}t` → `{cssProp}-top`
 * - `{compProp}b` → `{cssProp}-bottom`
 * - `{compProp}x` → `{cssProp}-left`, `{cssProp}-right`
 * - `{compProp}y` → `{cssProp}-top`, `{cssProp}-bottom`
 *
 * @param cssProp — Usually is `margin` or `padding`
 * @param compProp — Prop name that will be used in component
 * @param getSpaceValue — Custom getter from theme, default to get values from `theme.space`
 *
 * @example
 * import styled from 'react-emotion'
 * import { createSpaceProps, createPropStyles } from '@exah/prop-styles-system'
 *
 * // Create `margin` space prop styles with `mg` prefix
 * const marginPropStyles = createPropStyles(createSpaceProps('margin', 'mg'))
 *
 * // Add to component
 * const Box = styled.div(marginPropStyles)
 *
 * // Result
 * <Box mg /> // .css { margin: 10px; @media (max-width: 600px) { margin: 8px } }
 */

const createSpaceProps = (
  cssProp: CSSProp,
  compProp: CompPropName,
  getSpaceValue: Function
): PropStylesObj => {
  const modifiers = buildDirectionModifiers(cssProp, compProp)

  return toObj(modifiers, ([ modName, styleProp ]) => {
    const style = cssRuleSpaceStyle(styleProp, getSpaceValue)
    return {
      [modName]: (value, compProps, mediaKey) => style(value)(compProps, mediaKey)
    }
  })
}

export {
  createSpaceStyle,
  createSpaceProps
}
