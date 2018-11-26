import { createPropStyles, ruleProp } from '../core'
import { combine } from '../utils'
import { fontFamily } from './font-family'

const textHelpers = createPropStyles({
  fontSize: ruleProp('fontSize', '1rem'),
  fontWeight: ruleProp('fontWeight'),
  lineHeight: ruleProp('lineHeight', 'normal'),
  letterSpacing: ruleProp('letterSpacing', 'normal'),
  textAlign: ruleProp('textAlign'),
  whiteSpace: ruleProp('whiteSpace'),
  ellipsis: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
})

/**
 * ```js
 * import { text } from 'pss'
 * ```
 *
 * ⚠️ Some of this props may not be filtered by CSS-in-JS libraries (like `size`), so you may need to provide custom prop filtering.
 *
 * prop           | css                         | type               | value | true               | false
 * :--------------|:----------------------------|:-------------------|:------|:-------------------|:--------
 * `fontFamily`   | `font-family`               | `String`           | ✓     | {@link fontFamily} | —
 * `fontSize`     | `font-size`                 | `String`, `Number` | ✓     | `1rem`             | `medium`
 * `fontWeight`   | `font-weight`               | `String`           | ✓     | —                  | —
 * `lineHeight`   | `line-height`               | `String`, `Number` | ✓     | `normal`           | —
 * `letterSpacing`| `letter-spacing`            | `String`, `Number` | ✓     | `normal`           | —
 * `textAlign`    | `text-align`                | `String`           | ✓     | —                  | —
 * `whiteSpace`   | `white-space`               | `String`           | ✓     | —                  | —
 * `ellipsis`     | [Ellipsis...][ellipsis-url] | `true`             | —     | (see&nbsp;example) | —
 *
 * [ellipsis-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
 *
 * @example
 * import { text } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Text = styled('span')(text)
 *
 * @example
 * <Text textAlign='center' /> // text-align: center
 * <Text ellipsis /> // white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
 */

const text = combine(
  fontFamily,
  textHelpers
)

export {
  text
}
