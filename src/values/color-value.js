// @flow

import type { StyleValue, Props } from '../types'
import { identity, fallbackTo, isStr } from '@exah/utils'
import { getColor } from '../getters'

/**
 * ```js
 * import { colorValue } from 'pss'
 * ```
 *
 * Get color from theme and apply it to css prop. Must be used with {@link rule}.
 *
 * @param key — Key in `theme.color` or in `theme.palette[theme.default.palette]`
 * @param transformValue — Return customized CSS prop value (i.e. `box-shadow`, gradients) (optional, default to result color)
 *
 * @example
 * import pss, { rule, colorValue } from 'pss'
 *
 * const colors = pss({
 *   fg: rule('color', colorValue('fg')),
 *   bg: rule('backgroundColor', colorValue('bg')),
 *   shadow: rule('boxShadow', colorValue('shadow', (color) => `0 0 20px 0 ${color}`)),
 *   tm: [
 *      rule('color', colorValue('fg')),
 *      rule('backgroundColor', colorValue('bg'))
 *   ]
 * })
 *
 * // Add to component
 * const Box = styled.div`
 *   ${colors}
 * `
 *
 * @example
 * // theme.palette.default.fg
 * <Box fg={true} /> // background-color: #222222
 *
 * // theme.colors.black
 * <Box fg='black' /> // color: #222222
 *
 * // theme.palette.default.accent
 * <Box fg='accent' /> // color: #ff0000
 *
 * // theme.palette.default.shadow
 * <Box shadow={true} /> // box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2)
 *
 * // theme.palette.default.fg, theme.palette.default.bg
 * <Box tm='default' /> // color: #222222; background-color: #ffffff
 */

const colorValue = (
  key: string,
  transformValue: (color: string, props: Props) => StyleValue = identity
): Function => (input, props) => {
  const color = getColor(key, input)(props)
  return fallbackTo(
    isStr(color) ? transformValue(color, props) : color,
    input
  )
}

export {
  colorValue
}
