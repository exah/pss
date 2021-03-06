import { style } from '../core'

/**
 * ```js
 * import { lineHeight } from 'pss'
 * ```
 *
 * prop           | css              | theme  | value | default
 * :--------------|:-----------------|:-------|:------|:-------
 * `lineHeight`   | `line-height`    | —      | ✓     | —
 *
 * Related: {@link text}, {@link ellipsis}, {@link rule}.
 *
 * @param {Object} props
 *
 * @example
 * import { lineHeight } from 'pss'
 *
 * const Text = styled.p`
 *   ${lineHeight}
 * `
 *
 * @example
 * <Text lineHeight={1.5} /> // line-height: 1.5
 */

export const lineHeight = style({
  cssProp: 'lineHeight'
})
