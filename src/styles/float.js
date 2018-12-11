import { createPropStyles, rule } from '../core'
import { boolValue } from '../values'

/**
 * ```js
 * import { float } from 'pss'
 * ```
 *
 * prop       | css                      | type                | value | true                       | false
 * :----------|:-------------------------|:--------------------|:------|:---------------------------|:--------
 * `float`    | [`float`][float-url]     | `String`            | ✓     | —                          | —
 * `clear`    | [`clear`][clear-url]     | `String`, `Boolean` | ✓     | `both`                     | `none`
 * `clearFix` | [Clearfix][clearfix-url] | `true`              | —     | [styles](#clearfix-styles) | —
 *
 * <span id="clearfix-styles">Clearfix styles</span>
 *
 * ```css
 * &::after {
 *   content ' ';
 *   display: block;
 *   clear: both
 * }
 * ```
 *
 * [float-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/float
 * [clear-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/clear
 * [clearfix-url]: https://css-tricks.com/snippets/css/clear-fix/
 *
 * @example
 * import { float } from 'pss'
 *
 * const Box = styled.div`
 *   ${float}
 * `
 *
 * @example
 * <Box float='left' /> // float: left
 */

const float = createPropStyles({
  float: rule('float'),
  clear: rule('clear', boolValue('both', 'none')),
  clearFix: {
    '&::after': {
      content: '""',
      display: 'block',
      clear: 'both'
    }
  }
})

export {
  float
}