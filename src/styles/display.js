import { createStyles, rule } from '../core'
import { boolValue } from '../values'

/**
 * ```js
 * import { display } from 'pss'
 * ```
 *
 * prop       | css                      | type                 | value    | true      | false
 * :----------|:-------------------------|:---------------------|:---------|:--------- |:--------
 * `display`  | [`display`][display-url] | `String`, `Boolean`  | ✓        | `initial` | `none`
 *
 * [display-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/display
 *
 * Related: {@link hideOn}, {@link boolValue}, {@link rule}.
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
 * <Box display='inline-block' /> // display: inline-block;
 */

const display = createStyles({
  display: rule('display', boolValue('initial', 'none'))
})

export {
  display
}
