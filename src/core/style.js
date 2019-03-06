import { themeValue } from '../values/theme-value'
import { createStyles } from './create-styles'
import { createRule } from './create-rule'

/**
 * ```js
 * import { style } from 'pss'
 * ```
 *
 * Create style for single prop.
 * Combines {@link createStyles} and {@link createRule} in single function.
 * Inspired by [`styled-system`](https://github.com/jxnblk/styled-system).
 *
 * @param {Object} options
 *
 * @example
 * import pss, { style } from 'pss'
 *
 * const opacity = style({
 *   cssProp: 'opacity'
 * })
 *
 * const Box = styled.div`
 *   ${opacity}
 * `
 *
 * @example
 * <Box opacity={0.5} /> // → opacity: 0.5
 */

export const style = ({
  cssProp,
  themeKey,
  transformValue,
  scale,
  getter,
  prop = cssProp,
  getValue = themeKey ? themeValue({ themeKey, transformValue, scale, getter }) : undefined,
  rule = createRule({ cssProp, getValue })
}) => createStyles({
  [prop]: rule
})
