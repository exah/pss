// @flow

import type { StyleValue } from '../types'
import { isStr, isFn, fallbackTo, isArr } from '@exah/utils'
import { DEFAULT_KEY, DEFAULT_THEME_SPACE, SPACE_KEY } from '../constants'
import { hasMediaKeys, keys, px, splitUnit, toUnit } from '../utils'
import { getThemeMediaKeys, themePath } from '../getters'
import { sizeValue } from './size-value'

type Options = {
  themeKey: string,
  defaultSpace: Array<number>,
  getter: Function,
  transformValue: Function
}

const getValue = (input, spaces = []) => {
  const value = spaces[Math.abs(input)]
  const coeficent = ((input < 0) ? -1 : 1)

  if (value === undefined) {
    return null
  } else if (isStr(value)) {
    const [ number, unit ] = splitUnit(value)
    return toUnit(unit, Number(number) * coeficent)
  }

  return (value * coeficent)
}

export function createSpaceValue ({
  themeKey = SPACE_KEY,
  defaultSpace = DEFAULT_THEME_SPACE,
  getter = themePath(SPACE_KEY, defaultSpace),
  transformValue = px
}: Options = {}): (defaultValue: Function | StyleValue) => Function {
  return (defaultValue = sizeValue()) => (
    input,
    props,
    defaultMediaKey
  ) => {
    if (!isStr(input)) {
      const spaces = getter(props)

      if (isArr(spaces)) {
        return transformValue(
          getValue(input, spaces)
        )
      }

      if (defaultMediaKey != null) {
        return transformValue(
          getValue(input, fallbackTo(
            spaces[defaultMediaKey],
            spaces[DEFAULT_KEY]
          ))
        )
      }

      if (hasMediaKeys(getThemeMediaKeys(props), keys(spaces))) {
        return () => (mediaKey) => transformValue(
          getValue(input, spaces[mediaKey])
        )
      }
    }

    return isFn(defaultValue)
      ? defaultValue(input, props, defaultMediaKey)
      : defaultValue
  }
}

/**
 * ```js
 * import { spaceValue } from 'pss'
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
 * Related: {@link space}.
 *
 * @param cssProp — Usually is `margin` or `padding`
 * @param compProp — Prop name that will be used in component
 * @param getSpaceValue — Custom getter from theme, default to get values from `theme.space`
 *
 * @example
 * import pss, { createSpace } from 'pss'
 *
 * // Create `margin` space prop styles with `mg` prefix
 * const marginPropStyles = pss(createSpace('margin', 'mg'))
 *
 * // Add to component
 * const Box = styled.div(marginPropStyles)
 *
 * // Result
 * <Box mg={1} /> // .css { margin: 10px; @media (max-width: 600px) { margin: 8px } }
 */

export const spaceValue = createSpaceValue()
