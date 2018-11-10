import { FONT_KEY } from '../constants'
import { createPropStyles, createStyleFromTheme, ruleProp } from '../core'

/**
 * Alias **`textPropStyles`**
 *
 * ```js
 * import { text } from 'pss'
 * ```
 *
 * ⚠️ Some of this props may not be filtered by CSS-in-JS libraries (like `size`), so you may need to provide custom prop filtering.
 *
 * prop           | css                         | type               | value | true                       | false
 * :--------------|:----------------------------|:-------------------|:------|:---------------------------|:--------
 * `font`         | `font-family`               | `String`           | ✓     | —                          | —
 * `weight`       | `font-weight`               | `String`           | ✓     | —                          | —
 * `size`         | `font-size`                 | `String`, `Number` | ✓     | `1rem`                     | `medium`
 * `lineHeight`   | `line-height`               | `String`, `Number` | ✓     | `normal`                   | —
 * `letterSpacing`| `letter-spacing`            | `String`, `Number` | ✓     | `normal`                   | —
 * `transform`    | `text-transform`            | `String`           | ✓     | —                          | —
 * `decoration`   | `text-decoration`           | `String`           | ✓     | —                          | —
 * `align`        | `text-align`                | `String`           | ✓     | —                          | —
 * `hyphens`      | `text-align`                | `String`           | ✓     | `auto`                     | —
 * `whiteSpace`   | `white-space`               | `String`           | ✓     | —                          | —
 * `nobr`         | `white-space`               | `true`             | —     | `nowrap`                   | `normal`
 * `ellipsis`     | [Ellipsis...][ellipsis-url] | `true`             | —     | [styles](#ellipsis-styles) | —
 *
 * <span id="ellipsis-styles">Ellipsis styles</span>
 *
 * ```css
 * {
 *   white-space: nowrap;
 *   overflow: hidden;
 *   text-overflow: ellipsis;
 * }
 * ```
 *
 * [ellipsis-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
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
 * import { text } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Text = styled('p')(text)
 *
 * @example
 * <Text font='ui' /> // font-family: Helvetica, Arial, system-ui, sans-serif
 */

const text = createPropStyles({
  font: createStyleFromTheme({
    themeKey: FONT_KEY,
    getStyle: (themeValue, value) => ({
      fontFamily: themeValue || value
    })
  }),
  weight: ruleProp('fontWeight'),
  size: ruleProp('fontSize', '1rem', 'medium'),
  lineHeight: ruleProp('lineHeight', 'normal'),
  letterSpacing: ruleProp('letterSpacing', 'normal'),
  transform: ruleProp('textTransform'),
  decoration: ruleProp('textDecoration'),
  align: ruleProp('textAlign'),
  hyphens: ruleProp('hyphens', 'auto'),
  whiteSpace: ruleProp('whiteSpace'),
  nobr: ruleProp('whiteSpace', 'nowrap', 'normal'),
  italic: ruleProp('fontStyle', 'italic', 'normal'),
  ellipsis: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
})

export {
  text
}
