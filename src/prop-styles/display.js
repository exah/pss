import { createPropStyles, ruleProp } from '../core'

/**
 * Alias **`display`**
 *
 * ```js
 * import { display } from 'pss'
 * ```
 *
 * prop       | css                      | type                | value | true      | false
 * :----------|:-------------------------|:--------------------|:------|:--------- |:--------
 * `display`  | [`display`][display-url] | `String`, `Boolean` | ✓     | `initial` | `none`
 * `hide`     | `display`                | `true`              | —     | `none`    | —
 *
 * [display-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/display
 *
 * @example
 * import { position } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Box = styled('div')(position)
 *
 * @example
 * <Box display='inline-block' hideM />
 * // display: inline-block; @media (max-width: 600px) { display: none }
 */

const displayPropStyles = createPropStyles({
  display: ruleProp('display', 'initial', 'none'),
  hide: { display: 'none' }
})

export {
  displayPropStyles
}
