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
import { boolValue } from '../value'
import { toCssRule } from '../utils'

const createRule = (
  cssProp: string,
  trueVal: StyleValue,
  falseVal: StyleValue
): PropStyle => (val: PropStyleValue | StyleValue): Style => ({
  [cssProp]: isBool(val) ? (val === true ? trueVal : falseVal) : val
})

function experimentalCreateRule (
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

    if (value === false) {
      return css(defaultValue)
    }

    return everyMediaValue(value, css)(props)
  }
}

export {
  createRule,
  experimentalCreateRule
}
