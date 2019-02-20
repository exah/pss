import { createStyles, rule } from '../core'

/**
 * ```js
 * import { float } from 'pss'
 * ```
 *
 * prop    | css                  | type     | value | true   | false
 * :-------|:---------------------|:---------|:------|:-------|:--------
 * `float` | [`float`][float-url] | `String` | ✓     | —      | —
 * `clear` | [`clear`][clear-url] | `String` | ✓     | `both` | `none`
 *
 * [float-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/float
 * [clear-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/clear
 *
 * Related: {@link rule}, {@link boolValue}.
 *
 * @param {Object} props
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

const float = createStyles({
  float: rule('float'),
  clear: rule('clear')
})

export {
  float
}
