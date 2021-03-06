import { createStyles, rule } from '../core'

const randomHexColor = () =>
  '#' + ((Math.random() * 0xFFFFFF << 0).toString(16) + '0').slice(0, 6)

/**
 * ```js
 * import { outline } from 'pss'
 * ```
 *
 * prop         | css        | theme | value | default
 * :------------|:-----------|:------|:------|:----------
 * `outline`    | `outline`  | —     | ✓     | —
 *
 * \* Random hex color, useful for debugging layout
 *
 * Related: {@link rule}.
 *
 * @param {Object} props
 *
 * @example
 * import { outline } from 'pss'
 *
 * const Box = styled.div`
 *   ${outline}
 * `
 *
 * @example
 * <Box outline='1px solid red' /> // → outline: 1px solid red
 */

export const outline = createStyles({
  outline: rule('outline', (val) => val === 'debug' ? `1px solid ${randomHexColor()}` : val)
})
