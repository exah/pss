import { createStyles, rule, mediaRule } from '../core'
import { boolValue } from '../values'

/**
 * ```js
 * import { display } from 'pss'
 * ```
 *
 * prop       | css                      | type                 | value    | true      | false
 * :----------|:-------------------------|:---------------------|:---------|:--------- |:--------
 * `display`  | [`display`][display-url] | `String`, `Boolean`  | ✓        | `initial` | `none`
 * `hideOn`   | `display: none`          | one of `theme.media` | mediaKey | —         | —
 *
 * [display-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/display
 *
 * Related: {@link boolValue}, {@link rule}, {@link mediaRule}.
 *
 * @param {Object} props
 *
 * @example
 * import { display } from 'pss'
 *
 * const Box = styled.div`
 *   ${display}
 * `
 *
 * @example
 * <Box display='inline-block' hideOn='sm' />
 * // display: inline-block; @media (max-width: 600px) { display: none }
 */

const display = createStyles({
  display: rule('display', boolValue('initial', 'none')),
  hideOn: mediaRule('display', 'none')
})

export {
  display
}
