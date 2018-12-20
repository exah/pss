import { isBool, isFn, identity } from '@exah/utils'
import { everyMedia } from '../core/every-media'
import { wrap } from '../utils'

/**
 * ```js
 * import { rule } from 'pss'
 * ```
 *
 * Create style rule. Must be used with {@link createStyles}.
 *
 * @param {string} cssProp
 * @param {Function} [getValue = identity]
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

function rule (cssProp, getValue = identity) {
  const css = wrap(cssProp)

  function getStyle (get, input, props, mediaKey) {
    const value = get(input, props, mediaKey)

    if (isBool(value)) {
      return null
    }

    return isFn(value) ? getStyle(value, input, props, mediaKey) : value
  }

  return (input, props, mediaKey) => everyMedia(
    props,
    getStyle(getValue, input, props, mediaKey),
    css
  )
}

export {
  rule
}
