// @flow

import type { PropStyle } from '../types'
import { curryN } from '@exah/utils'
import { CSS_PROPS_DEFAULTS } from '../constants'
import { getActiveColors } from '../getters'

/**
 * ```js
 * import { createPaletteStyle } from 'pss'
 * ```
 *
 * Set both `background-color` and `color` for selected `theme.palette`.
 *
 * @param [backgroundKey = 'bg'] — is key in `theme.palette[val]` for CSS `background-color` prop
 * @param [colorKey = 'fg'] — is key in `theme.palette[val]` for CSS `color` prop
 *
 * @example
 * import styled from 'react-emotion'
 * import pss, { createPaletteStyle } from 'pss'
 *
 * const myColors = pss({
 *   tm: createPaletteStyle('bg', 'fg')
 * })
 *
 * const Box = styled.div(myColors)
 *
 * @example
 * // theme.palette.default.bg, theme.palette.default.fg
 * <Box tm /> // background-color: #ffffff; color: #222222
 *
 * // theme.palette.inverted.bg, theme.palette.inverted.fg
 * <Box tm='inverted' /> // background-color: #222222; color: #fffffff
 */

const createPaletteStyle = (
  backgroundKey: string = 'bg',
  colorKey: string = 'fg'
): PropStyle => curryN(2, (input, props) => {
  if (input == null) {
    return {}
  }

  if (input === false) {
    return {
      backgroundColor: CSS_PROPS_DEFAULTS['backgroundColor'],
      color: CSS_PROPS_DEFAULTS['color']
    }
  }

  const palette = getActiveColors(input)(props)

  return {
    backgroundColor: palette[backgroundKey],
    color: palette[colorKey]
  }
})

export {
  createPaletteStyle
}
