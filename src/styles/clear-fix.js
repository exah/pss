import { createStyles } from '../core'

/**
 * ```js
 * import { clearFix } from 'pss'
 * ```
 *
 * prop       | css                       | type    | value | true             | false
 * :----------|:--------------------------|:--------|:------|:-----------------|:--------
 * `clearFix` | styles for clear fix hack | `true`  | —     | Clear fix styles | —
 *
 * Related: {@link float}.
 *
 * @param {Object} props
 *
 * @example
 * import { clearFix } from 'pss'
 *
 * const Box = styled.div`
 *   ${clearFix}
 * `
 *
 * @example
 * <Box clearFix />
 *
 * @example
 * &::after {
 *   content ' ';
 *   display: block;
 *   clear: both
 * }
 */

const clearFix = createStyles({
  clearFix: {
    '&::after': {
      content: '""',
      display: 'block',
      clear: 'both'
    }
  }
})

export {
  clearFix
}
