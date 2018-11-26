// @flow

import type {
  Mixin,
  PropStyles
} from '../types'

import { toObj } from '@exah/utils'
import { SHORT_DIRECTIONS } from '../constants'
import { getSpace } from '../getters'
import { toCssRule } from '../utils'
import { everyMediaValue } from './every-media'

type SpaceProps = Array<Array<string | Array<string>>>

const createSpaceModifiers = (
  styleProp: string,
  compProp: string = ''
): SpaceProps => [
  ...Object.entries(SHORT_DIRECTIONS).map(([ shortDir, longDir ]: any) => [
    compProp + shortDir,
    longDir.map((dir) => styleProp + dir)
  ]),
  [ compProp, [ styleProp ] ]
]

const getSpaceStyle = (
  styleProp: string,
  getSpaceValue: Function = getSpace,
  toPx = true
): Function =>
  (input, defaultMediaKey): Mixin =>
    (props, mediaKey = defaultMediaKey, isRawValue) => everyMediaValue(
      isRawValue ? input : getSpaceValue(input, null, mediaKey),
      toCssRule(styleProp, toPx)
    )(props)

/**
 * ```js
 * import { createSpaceMixin } from 'pss'
 * ```
 *
 * Similar to {@link createSpace}, but creates style function instead of prop styles,
 * that can be used inside CSS-in-JS components with `theme` prop.
 *
 * For example if `cssProp` = `margin` result is {@link Mixin} with API:
 *
 * - `fn(step)` → `margin`
 * - `fn.l(step)` → `margin-left`
 * - `fn.r(step)` → `margin-right`
 * - `fn.t(step)` → `margin-top`
 * - `fn.b(step)` → `margin-bottom`
 * - `fn.x(step)` → `margin-left`, `margin-right`
 * - `fn.y(step)` → `margin-top`, `margin-bottom`
 *
 * @param cssProp — Usually is `margin` or `padding`
 * @param getSpaceValue — Custom getter from theme, default to get values from `theme.space`
 *
 * @example
 * import styled from 'react-emotion'
 * import pss, { createSpaceMixin } from 'pss'
 *
 * const margin = createSpaceMixin('margin')
 *
 * const Box = styled.div(margin.x(2))
 * const OtherBox = styled.div({ display: 'flex' }, margin.l(1))
 *
 * @example
 * // margin-left: 20px; margin-right: 20px;
 * // @media (max-width: 600px) { margin-left: 16px; margin-right: 16px }
 * <Box />
 *
 * // display: flex; margin-left: 10px;
 * // @media (max-width: 600px) { margin-left: 10px }
 * <OtherBox />
 */

const createSpaceMixin = (
  cssProp: string,
  getSpaceValue: Function
): Mixin => {
  const baseStyle = getSpaceStyle(cssProp, getSpaceValue)
  const modifiers = createSpaceModifiers(cssProp)

  return Object.assign(
    baseStyle,
    toObj(modifiers, ([ modName, styleProp ]) => !modName ? null : ({
      [modName]: getSpaceStyle(styleProp, getSpaceValue)
    }))
  )
}

/**
 * ```js
 * import { createSpace } from 'pss'
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
 * import pss, { createSpace } from 'pss'
 *
 * // Create `margin` space prop styles with `mg` prefix
 * const marginPropStyles = pss(createSpace('margin', 'mg'))
 *
 * // Add to component
 * const Box = styled.div(marginPropStyles)
 *
 * // Result
 * <Box mg /> // .css { margin: 10px; @media (max-width: 600px) { margin: 8px } }
 */

const createSpace = (
  cssProp: string,
  compProp: string,
  getSpaceValue: Function
): PropStyles => {
  const modifiers = createSpaceModifiers(cssProp, compProp)

  return toObj(modifiers, ([ modName, styleProp ]) => {
    const style = getSpaceStyle(styleProp, getSpaceValue)
    return {
      [modName]: (input, compProps, mediaKey, isRawValue) =>
        style(input)(compProps, mediaKey, isRawValue)
    }
  })
}

export {
  createSpaceMixin,
  createSpace
}
