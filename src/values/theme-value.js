import { path, identity, isObj, isFn, mapObj } from '@exah/utils'
import { getDefault, themePath } from '../getters'

function get ({ themeKey, transformValue, scale }) {
  const isTransformValue = isFn(transformValue)

  if (!isTransformValue) {
    transformValue = identity
  }

  return (input, defaultValue, defaultMediaKey) => (props) => {
    const valueKey = input === true
      ? getDefault(themeKey)(props)
      : input

    const themeScale = themePath(themeKey, scale)(props)
    const value = path(valueKey)(themeScale)

    if (Object(value).hasOwnProperty(defaultMediaKey)) {
      return transformValue(value[defaultMediaKey])
    }

    if (isTransformValue && isObj(value)) {
      return mapObj(
        (mediaKey, subValue) => ({ [mediaKey]: transformValue(subValue) }),
        value
      )
    }

    return value == null
      ? defaultValue
      : transformValue(value)
  }
}

/**
 * ```js
 * import { themeValue } from 'pss'
 * ```
 *
 * Use values defined in `theme[themeKey]`.
 *
 * See {@link fontFamily}, {@link radius}.
 *
 * @param {Object} [options = {}]
 * @return {Function}
 *
 * @example
 * const theme = {
 *   font: {
 *     heading: 'Times New Roman, serif',
 *     ui: 'system-ui, Helvetica, sans-serif'
 *   }
 * }
 *
 * @example
 * import pss, { themeValue } from 'pss'
 *
 * const Text = styled.div(pss({
 *   fontFamily: rule('fontFamily', themeValue({ themeKey: 'font' }))
 * }))
 *
 * <ThemeProvider theme={theme}>
 *   <Text fontFamily='ui'>
 *     Hello World!
 *   </Text>
 * </ThemeProvider>
 *
 * @example
 * .css {
 *   font-family: system-ui, Helvetica, sans-serif;
 * }
 */

function themeValue ({
  themeKey,
  transformValue,
  scale,
  getter = get({ themeKey, transformValue, scale })
} = {}) {
  return (defaultValue = transformValue) =>
    (input, props, mediaKey) =>
      getter(input, defaultValue, mediaKey)(props)
}

export {
  themeValue
}
