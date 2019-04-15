import { themeValue } from '../values/theme-value'
import { createStyles } from './create-styles'
import { createRule } from './create-rule'

const VARIANT_PROP = 'variant'
const VARIANT_AUTO = 'auto'

/**
 * Create `variant` from styles defined directly in `theme`.
 * Inspired by [`styled-system`](https://github.com/jxnblk/styled-system).
 *
 * Related: {@link textStyle}, {@link boxStyle}, {@link rule}, {@link themeValue}.
 *
 * @param {Object} options
 * @param {String} [options.prop = 'variant']
 * @param {String} [options.keyword = 'auto']
 *
 * @example
 * import { variant } from 'pss'
 *
 * const variant = variant({
 *   themeKey: 'textStyle'
 * })
 *
 * const Text = styled.p`
 *   ${variant}
 * `
 *
 * @example
 * const theme = {
 *   textStyle: {
 *     default: {
 *       fontSize: '16px',
 *       lineHeight: 1.2,
 *       fontWeight: normal,
 *       fontFamily: 'system-ui'
 *     },
 *     heading: {
 *       fontSize: '2rem',
 *       lineHeight: 1.2,
 *       fontWeight: 'bold',
 *       fontFamily: 'system-ui'
 *     }
 *   }
 * }
 *
 * <Text variant='default' /> // → `theme.textStyle.default`
 * <Text variant='heading' /> // → `theme.textStyle.heading`
 *
 * @example
 * const themeWithDefault = {
 *   default: {
 *      textStyle: 'default',
 *   },
 *   ...theme,
 * }
 *
 * <Text variant='auto' /> // → `theme.textStyle.default`
 */

function variant ({
  prop = VARIANT_PROP,
  keyword = VARIANT_AUTO,
  themeKey,
  transformValue,
  scale,
  getter
}) {
  const rule = createRule({
    getValue: themeValue({
      keyword,
      themeKey,
      transformValue,
      scale,
      getter
    })
  })

  const mixin = createStyles({
    [prop]: rule
  })

  if (prop !== VARIANT_PROP) {
    mixin[VARIANT_PROP] = createStyles({
      [VARIANT_PROP]: rule
    })
  }

  return mixin
}

export {
  variant
}
