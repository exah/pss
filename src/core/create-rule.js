import { isBool, isNum, isFn, identity, isStr } from '@exah/utils'
import { everyMedia } from '../core/every-media'
import { wrap } from '../utils'

/**
 * ```js
 * import { createRule } from 'pss'
 * ```
 *
 * Create style from value. Must be used with {@link createStyles}.
 *
 * Related: {@link rule}.
 *
 * @param {Object} options
 *
 * @example
 * import pss, { createRule, spaceValue } from 'pss'
 *
 * const Box = styled.div(pss({
 *   gap: createRule({
 *     getStyle: (val) => ({ margin: val, padding: val }),
 *     getValue: spaceValue()
 *   })
 * }))
 *
 * @example
 * // Add theme to ThemeProvider
 * <ThemeProvider theme={theme}>
 *   <Box gap={1} /> // → margin: 8px; padding: 8px;
 * </ThemeProvider>
 */

function createRule ({
  cssProp,
  getStyle = wrap(cssProp),
  getValue = identity
}) {
  function getValues (get, input, props, mediaKey) {
    const result = get(input, props, mediaKey)

    if (isBool(result)) {
      return null
    }

    if (result === undefined && (isStr(input) || isNum(input))) {
      return input
    }

    return isFn(result) ? getValues(result, input, props, mediaKey) : result
  }

  return (input, props, mediaKey) => everyMedia(
    props,
    getValues(getValue, input, props, mediaKey),
    (result) => getStyle(result, input, props, mediaKey)
  )
}

export {
  createRule
}
