import { isBool, isStr, isFn } from '@exah/utils'
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
  getValue = boolValue()
) {
  const css = wrap(cssProp)

  function getStyle (get, input, props, mediaKey) {
    const value = get(input, props, mediaKey)

    if (isBool(value)) {
      return null
    }

    return isFn(value) ? getStyle(value, input, props, mediaKey) : value
  }

  return (
    input,
    props,
    mediaKey,
    isRawValue
  ) => {
    if (isRawValue === true) {
      return css(input)
    }

    if (isStr(input)) {
      const customValue = themePath(input)(props)

      if (customValue !== undefined) {
        return css(customValue)
      }
    }

    return everyMedia(
      props,
      getStyle(getValue, input, props, mediaKey),
      css
    )
  }
}

export {
  rule
}
