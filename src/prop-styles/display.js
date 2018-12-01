import { createPropStyles, createRule, mediaRule } from '../core'
import { boolValue } from '../values'

/**
 * ```js
 * import { display } from 'pss'
 * ```
 *
 * prop       | css                      | type                 | value | true      | false
 * :----------|:-------------------------|:---------------------|:------|:--------- |:--------
 * `display`  | [`display`][display-url] | `String`, `Boolean`  | ✓     | `initial` | `none`
 * `hideOn`   | `display: none`          | one of `theme.media` | media | —         | —
 *
 * [display-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/display
 *
 * @example
 * import { display } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Box = styled('div')(display)
 *
 * @example
 * <Box display='inline-block' hideM />
 * // display: inline-block; @media (max-width: 600px) { display: none }
 */

const display = createPropStyles({
  display: createRule('display', boolValue('initial', 'none')),
  hideOn: mediaRule('display', 'none')
})

export {
  display
}
