import { createPropStyles, createRule } from '../core'
import { boolValue } from '../values'
import { combine } from '../utils'
import { ellipsis } from './ellipsis'
import { fontFamily } from './font-family'

const textHelpers = createPropStyles({
  fontSize: createRule('fontSize', boolValue('1rem')),
  fontWeight: createRule('fontWeight'),
  lineHeight: createRule('lineHeight', boolValue('normal')),
  letterSpacing: createRule('letterSpacing', boolValue('normal')),
  textAlign: createRule('textAlign'),
  whiteSpace: createRule('whiteSpace')
})

/**
 * ```js
 * import { text } from 'pss'
 * ```
 *
 * ⚠️ Some of this props may not be filtered by CSS-in-JS libraries (like `size`), so you may need to provide custom prop filtering.
 *
 * prop           | css              | type               | value | true               | false
 * :--------------|:-----------------|:-------------------|:------|:-------------------|:--------
 * `fontFamily`   | `font-family`    | `String`           | ✓     | {@link fontFamily} | —
 * `fontSize`     | `font-size`      | `String`, `Number` | ✓     | `1rem`             | `medium`
 * `fontWeight`   | `font-weight`    | `String`           | ✓     | —                  | —
 * `lineHeight`   | `line-height`    | `String`, `Number` | ✓     | `normal`           | —
 * `letterSpacing`| `letter-spacing` | `String`, `Number` | ✓     | `normal`           | —
 * `textAlign`    | `text-align`     | `String`           | ✓     | —                  | —
 * `whiteSpace`   | `white-space`    | `String`           | ✓     | —                  | —
 * `ellipsis`     | `text-overflow`  | `true`             | —     | {@link ellipsis}   | —
 *
 * @example
 * import { text } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Text = styled('p')(text)
 *
 * @example
 * <Text textAlign='center' /> // text-align: center
 * <Text lineHeight /> // line-height: normal
 */

const text = combine(
  fontFamily,
  textHelpers,
  ellipsis
)

export {
  text
}
