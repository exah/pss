// @flow

import type { PropStyleValue, StyleValue } from '../types'
import { isNum, isFn } from '@exah/utils'
import { SIZES_KEY } from '../constants'
import { getThemeMediaValue } from '../getters'
import { percentage, toUnit } from '../utils'
import { boolValue } from './bool-value'

type Options = {
  getter: Function,
  themeKey: string,
  toPx: boolean
}

function createSizeValue ({
  themeKey = SIZES_KEY,
  getter = getThemeMediaValue(themeKey, toUnit)
}: Options = {}): (defaultValue: Function | StyleValue) => Function {
  return (defaultValue = boolValue('100%', 0)) => (
    input: PropStyleValue,
    props,
    mediaKey
  ) => {
    const value = isNum(input)
      ? percentage(input)
      : isFn(defaultValue)
        ? defaultValue(input)
        : defaultValue

    return getter(input, value, mediaKey)
  }
}

const sizeValue = createSizeValue()

export {
  createSizeValue,
  sizeValue
}
