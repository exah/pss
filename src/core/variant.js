import { identity } from '@exah/utils'
import { getThemeValue } from '../getters'
import { themeValue } from '../values/theme-value'
import { createPropStyles } from './create-prop-styles'
import { themeStyle } from './theme-style'
import { rule } from './rule'

/**
 * Create `variant` from styles defined directly in `theme`.
 * Inspired by [`styled-system`](https://github.com/jxnblk/styled-system).
 *
 * Related: {@link themeValue}, {@link themeStyle}.
 *
 * @param {Object} options
 *
 * @example
 * import { variant } from 'pss'
 *
 * const Text = styled.p`
 *   ${variant({ themeKey: 'textStyle' })}
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

function variant ({
  themeKey,
  prop = 'variant',
  cssProp = false,
  transformValue = identity,
  themeGetter = getThemeValue(themeKey, transformValue)
}) {
  const style = cssProp === false
    ? themeStyle({ themeKey, transformValue, themeGetter })
    : rule(cssProp, themeValue({ themeKey, transformValue, themeGetter }))

  return createPropStyles({
    [prop]: style
  })
}

export {
  variant
}
