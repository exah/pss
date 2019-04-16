import { style } from '../core'

/**
 * ```js
 * import { display } from 'pss'
 * ```
 *
 * prop       | css                      | type     | value    | true      | false
 * :----------|:-------------------------|:---------|:---------|:--------- |:--------
 * `display`  | [`display`][display-url] | `String` | ✓        | —         | —
 *
 * [display-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/display
 *
 * Related: {@link hide}, {@link boolValue}, {@link rule}.
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

const display = style({
  cssProp: 'display'
})

export {
  display
}
