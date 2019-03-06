import { VARIANT } from '../constants'
import { themeValue } from '../values/theme-value'
import { createStyles } from './create-styles'
import { themeStyle } from './theme-style'
import { rule } from './rule'

/**
 * Create `variant` from styles defined directly in `theme`.
 * Inspired by [`styled-system`](https://github.com/jxnblk/styled-system).
 *
 * Related: {@link textStyle}, {@link boxStyle}, {@link rule}, {@link themeValue}, {@link themeStyle}.
 *
 * @param {Object} options
 *
 * @example
 * import { createVariant } from 'pss'
 *
 * const variant = createVariant({
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
 */

function createVariant ({
  prop = VARIANT,
  cssProp = false,
  scale,
  themeKey,
  transformValue,
  getter
}) {
  const style = cssProp === false
    ? themeStyle({ themeKey, transformValue, scale, getter })
    : rule(cssProp, themeValue({ themeKey, transformValue, scale, getter }))

  const mixin = createStyles({
    [prop]: style
  })

  if (prop !== VARIANT) {
    mixin[VARIANT] = createStyles({
      [VARIANT]: style
    })
  }

  return mixin
}

export {
  createVariant
}
