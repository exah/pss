// @flow

import type {
  StyleValue,
  PropStyle,
  Props,
  PropStyleValue,
  Style
} from '../types'

import { isBool, isStr } from '@exah/utils'
import { CSS_DEFAULT_VALUE, CSS_PROPS_DEFAULTS } from '../constants'
import { everyMediaValue } from './every-media'
import { themePath } from '../getters'
import { boolValue } from '../values'
import { toCssRule } from '../utils'

/**
 * Alias **`rule`**.
 *
 * ```js
 * import { createRule } from 'pss'
 * ```
 *
 * Create css rule. Must be used with {@link createPropStyles}.
 *
 * @example
 * import pss, { createRule } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Box = styled.div(pss({
 *   display: createRule('display')
 * }))
 *
 * @example
 * // Add theme to ThemeProvider
 * <ThemeProvider theme={theme}>
 *   <Box display='flex' /> // { display: 'flex' }
 * </ThemeProvider>
 */

function createRule (
  cssProp: string,
  getValue: Function = boolValue(),
  defaultValue: StyleValue = CSS_PROPS_DEFAULTS[cssProp] || CSS_DEFAULT_VALUE
): PropStyle {
  return (
    input: PropStyleValue,
    props: Props,
    mediaKey: ? string,
    isRawValue: ? boolean
  ): Style => {
    const css = toCssRule(cssProp)

    if (isRawValue === true) {
      return css(input)
    }

    if (isStr(input)) {
      const customValue = themePath(input)(props)

      if (customValue !== undefined) {
        return css(customValue)
      }
    }

    const value = getValue(input, props, mediaKey)

    if (isBool(value)) {
      return value === false ? css(defaultValue) : {}
    }

    return everyMediaValue(value, css)(props)
  }
}

export {
  createRule
}
