// @flow

import type { PropStyleValue, StyleValue } from '../types'
import { isNum, isFn } from '@exah/utils'
import { SIZES_KEY } from '../constants'
import { getThemeMediaValue } from '../getters'
import { percentage } from '../utils'
import { boolValue } from './bool-value'

type Options = {
  getter: Function,
  themeKey: string
}

function createSizeValue ({
  themeKey = SIZES_KEY,
  getter = getThemeMediaValue(themeKey)
}: Options = {}): (defaultValue: Function | StyleValue) => Function {
  return (defaultValue = boolValue('100%', 0)) => (
    input: PropStyleValue,
    props,
    mediaKey
  ) => getter(
    input,
    isNum(input)
      ? percentage(input)
      : isFn(defaultValue)
        ? defaultValue(input)
        : defaultValue,
    mediaKey
  )
}

const sizeValue = createSizeValue()

export {
  createSizeValue,
  sizeValue
}
