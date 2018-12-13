import { isBool, isStr } from '@exah/utils'
import { CSS_DEFAULT_VALUE, CSS_PROPS_DEFAULTS } from '../constants'
import { everyMedia } from '../core/every-media'
import { themePath } from '../getters'
import { boolValue } from '../values'
import { wrap } from '../utils'

/**
 * ```js
 * import { rule } from 'pss'
 * ```
 *
 * Create style rule. Must be used with {@link createPropStyles}.
 *
 * @param {string} cssProp
 * @param {Function} [getValue = boolValue()]
 * @param {string} [defaultValue = 'unset']
 * @return {Function}
 *
 * @example
 * import pss, { rule } from 'pss'
 *
 * const Box = styled.div(pss({
 *   display: rule('display')
 * }))
 *
 * @example
 * // Add theme to ThemeProvider
 * <ThemeProvider theme={theme}>
 *   <Box display='flex' /> // → display: flex
 * </ThemeProvider>
 */

function rule (
  cssProp,
  getValue = boolValue(),
  defaultValue = CSS_PROPS_DEFAULTS[cssProp] || CSS_DEFAULT_VALUE
) {
  return (
    input,
    props,
    mediaKey,
    isRawValue
  ) => {
    const css = wrap(cssProp)

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

    return everyMedia(props, value, css)
  }
}

export {
  rule
}
