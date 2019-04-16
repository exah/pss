import { createStyles, combineStyles } from '../core'
import { spaceRule } from '../rules'

export const createSpaceStyles = (prop, cssProp) => createStyles({
  [prop]: spaceRule(cssProp),
  [prop + 'l']: spaceRule(cssProp + 'Left'),
  [prop + 'r']: spaceRule(cssProp + 'Right'),
  [prop + 't']: spaceRule(cssProp + 'Top'),
  [prop + 'b']: spaceRule(cssProp + 'Bottom'),
  [prop + 'x']: [ spaceRule(cssProp + 'Left'), spaceRule(cssProp + 'Right') ],
  [prop + 'y']: [ spaceRule(cssProp + 'Top'), spaceRule(cssProp + 'Bottom') ]
})

export const margin = createSpaceStyles('mg', 'margin')
export const padding = createSpaceStyles('pd', 'padding')

/**
 * ```js
 * import { space } from 'pss'
 * ```
 *
 * Consistent `space` system for setting `margin`, or `padding`. Created with {@link spaceValue}.
 *
 *
 * **Component props:**
 *
 * - `mg` → `margin`
 * - `mgl` → `margin-left`
 * - `mgr` → `margin-right`
 * - `mgt` → `margin-top`
 * - `mgb` → `margin-bottom`
 * - `mgx` → `margin-left`, `margin-right`
 * - `mgy` → `margin-top`, `margin-bottom`
 * - `pd` → `padding`
 * - `pdl` → `padding-left`
 * - `pdr` → `padding-right`
 * - `pdt` → `padding-top`
 * - `pdb` → `padding-bottom`
 * - `pdx` → `padding-left`, `padding-right`
 * - `pdy` → `padding-top`, `padding-bottom`
 *
 * **`Number` values:**
 *
 * - Value from `theme.space[mediaKey]`, `theme.space.all` or `theme.space` `Array` by index
 * - Negative value for negative margins
 *
 *
 * **`String` values:**
 *
 * Treated same way as in {@link size}.
 *
 * - Get value by path in `theme.size` or in top level `theme` object
 * - If value in `theme.sizes` is an `Object` with media keys (like in `theme.media`) value is responsive
 * - Other `String` values is passed as raw CSS value (like `'10%'` or `'100vh'`).
 *
 * Related: {@link spaceValue}, {@link sizes}.
 *
 * @param {Object} props
 *
 * @example
 * import { space } from 'pss'
 *
 * const Box = styled.div`
 *   ${space}
 * `
 * @example
 * const theme = {
 *   media: { sm: '(max-width: 600px)' },
 *   space: [ 0, 8, 16, 32, 65 ]
 * }
 *
 * // `theme.space[1]`
 * <Box mg={1} /> // → margin: 8px;
 * <Box mgl={1} /> // → margin-left: 8px;
 *
 * // `theme.space[2]`
 * <Box mgy={2} /> // → margin-top: 16px; margin-bottom: 16px;
 * <Box mg={-2} /> // → margin: -16px;
 *
 * // `theme.space[0]`
 * <Box mg={0} /> // → margin: 0;
 *
 * // Responsive
 * <Box mgr={{ sm: -1 }} /> // → @media (max-width: 600px) { margin-right: -8px }
 * <Box mgr={{ all: 2, sm: -1 }} /> // → margin-right: 16px; @media (max-width: 600px) { margin-right: -8px }
 *
 * // Custom values
 * <Box mgx='auto' /> // → margin-left: auto; margin-right: auto
 * <Box mgy='100px' /> // → margin-top: 100px; margin-bootom: 100px
 *
 * @example
 * const theme = {
 *   media: {
 *     sm: '(max-width: 600px)'
 *   },
 *   space: {
 *     all: [ 0, 10, 20, 40, 80 ],
 *     sm: [ 0, 8, 16, 32, 64 ],
 *   }
 * }
 *
 * // `theme.space.all[1]` and `theme.space.sm[1]`
 * <Box mg={1} /> // → margin: 10px; @media (max-width: 600px) { margin: 8px }
 * <Box mgl={1} /> // → margin-left: 10px; @media (max-width: 600px) { margin-left: 8px }
 *
 * // `theme.space.all[2]` and `theme.space.sm[2]`
 * <Box mgy={2} /> // → margin-top: 20px; margin-bottom: 20px; @media (max-width: 600px) { margin-top: 16px; margin-bottom: 16px }
 * <Box mg={-2} /> // → margin: -20px; @media (max-width: 600px) { margin: -16px; }
 *
 * // `theme.space.all[0]` and `theme.space.sm[0]`
 * <Box mg={0} /> // → margin: 0; @media (max-width: 600px) { margin: 0 }
 *
 * // Responsive
 * <Box mgr={{ sm: -1 }} /> // → @media (max-width: 600px) { margin-right: -8px }
 * <Box mgr={{ all: 2, sm: -1 }} /> // → margin-right: 20px; @media (max-width: 600px) { margin-right: -8px }
 */

export const space = combineStyles(margin, padding)
