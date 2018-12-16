import { createStyles, rule } from '../core'

const randomHexColor = () =>
  '#' + (Math.random() * 0xFFFFFF << 0).toString(16)

/**
 * ```js
 * import { outline } from 'pss'
 * ```
 *
 * prop         | css             | type                 | value | true       | false
 * :------------|:----------------|:---------------------|:------|:-----------|:--------
 * `outline`    | `outline`       | `String`, `'debug'`* | ✓     | —         | —
 *
 * \* Random hex color, useful for debugging layout
 *
 * ⚠️ This prop may not be filtered by CSS-in-JS libraries, so you may need to provide custom prop filtering.
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
