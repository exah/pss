import { isBool, isNum, isFn, identity, isStr, mapObj, isObj, toArr } from '@exah/utils'
import { wrap, wrapIfMedia, getThemeMedia } from '../utils'

const has = (a, b) => b.some((key) => a.includes(key))

function everyMedia (props, value, wrapper) {
  const media = getThemeMedia(props)

  if (isObj(value) && has(Object.keys(media), Object.keys(value))) {
    return mapObj((k, v) => wrapIfMedia(media[k], wrapper(v)), value)
  }

  return wrapper(value)
}

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

  return (inputs, props, mediaKey) => toArr(inputs).reduce((acc, input) => ({
    ...acc,
    ...everyMedia(
      props,
      getValues(getValue, input, props, mediaKey),
      (result) => getStyle(result, input, props, mediaKey)
    )
  }), {})
}

export {
  createRule
}
