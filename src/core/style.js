import { createStyles } from './create-styles'
import { createRule } from './create-rule'

/**
 * ```js
 * import { style } from 'pss'
 * ```
 *
 * Create style for single prop.
 * Combines {@link createStyles} and {@link createRule} in single function.
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
  getValue,
  prop = cssProp,
  rule = createRule({ cssProp, getValue })
}) => createStyles({
  [prop]: rule
})
