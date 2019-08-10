import { createRule } from './create-rule'

/**
 * ```js
 * import { rule } from 'pss'
 * ```
 *
 * Create style rule. Must be used with {@link createStyles}.
 *
 * @param {string} cssProp
 * @param {Function} [value = identity]
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

function rule (cssProp, getValue) {
  return createRule({
    cssProp,
    getValue
  })
}

export {
  rule
}
