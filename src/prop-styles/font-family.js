import { FONT_KEY } from '../constants'
import { createPropStyles, createStyleFromTheme } from '../core'

/**
 * ```js
 * import { fontFamily } from 'pss'
 * ```
 *
 * prop           | css                         | type               | value | true      | false
 * :--------------|:----------------------------|:-------------------|:------|:----------|:--------
 * `fontFamily`   | `font-family`               | `String`           | ✓     | —         | —
 *
 * Also you can provide **fonts** with `theme`:
 *
 * ```js
 * const theme = {
 *   font: {
 *     ui: 'Helvetica, Arial, system-ui, sans-serif'
 *   }
 * }
 * ```
 *
 * @example
 * import { fontFamily } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Text = styled('span')(fontFamily)
 *
 * @example
 * <Text fontFamily='ui' /> // font-family: Helvetica, Arial, system-ui, sans-serif
 */

const fontFamily = createPropStyles({
  fontFamily: createStyleFromTheme({
    themeKey: FONT_KEY,
    getStyle: (themeValue, value) => ({
      fontFamily: themeValue || value
    })
  })
})

export {
  fontFamily
}
