import { createPropStyles, ruleProp } from '../core'

/**
 * Alias **`text`**
 *
 * ```js
 * import { text } from 'pss'
 * ```
 *
 * prop         | css                         | type               | value | true                       | false
 * :------------|:----------------------------|:-------------------|:------|:---------------------------|:--------
 * `font`       | `font-family`               | `String`           | ✓     | —                          | —
 * `weight`     | `font-weight`               | `String`           | ✓     | —                          | —
 * `size`       | `font-size`                 | `String`, `Number` | ✓     | `1rem`                     | `medium`
 * `lineHeight` | `line-height`               | `String`, `Number` | ✓     | `normal`                   | —
 * `transform`  | `text-transform`            | `String`           | ✓     | —                          | —
 * `decoration` | `text-decoration`           | `String`           | ✓     | —                          | —
 * `align`      | `text-align`                | `String`           | ✓     | —                          | —
 * `hyphens`    | `text-align`                | `String`           | ✓     | `auto`                     | —
 * `whiteSpace` | `white-space`               | `String`           | ✓     | —                          | —
 * `nobr`       | `white-space`               | `true`             | —     | `nowrap`                   | `normal`
 * `ellipsis`   | [Ellipsis...][ellipsis-url] | `true`             | —     | [styles](#ellipsis-styles) | —
 *
 * ##### Ellipsis styles
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
 * @example
 * import { text } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Text = styled('p')(text)
 *
 * @example
 * <Text font='system-ui' /> // font-family: system-ui
 */

const textPropStyles = createPropStyles({
  font: ruleProp('fontFamily'),
  weight: ruleProp('fontWeight'),
  size: ruleProp('fontSize', '1rem', 'medium'),
  lineHeight: ruleProp('lineHeight', 'normal'),
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
  textPropStyles
}
