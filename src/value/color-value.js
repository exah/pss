// @flow

import type { StyleValue, Props } from '../types'
import { identity, fallbackTo, isStr } from '@exah/utils'
import { getColor } from '../getters'

const colorValue = (
  paletteKey: string,
  transformValue: (color: string, props: Props) => StyleValue = identity
): Function => (input, props) => {
  const color = getColor(paletteKey, input)(props)
  return fallbackTo(
    isStr(color) ? transformValue(color, props) : color,
    input
  )
}

export {
  colorValue
}
