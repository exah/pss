import { createStyles, combineStyles } from '../core'
import { spaceRule } from '../rules'

export const createSpaceStyles = (prop) => createStyles({
  [prop]: spaceRule(prop),
  [prop + 'Left']: spaceRule(prop + 'Left'),
  [prop + 'Right']: spaceRule(prop + 'Right'),
  [prop + 'Top']: spaceRule(prop + 'Top'),
  [prop + 'Bottom']: spaceRule(prop + 'Bottom')
})

export const createAliasSpaceStyles = (prop, cssProp) => createStyles({
  [prop]: spaceRule(cssProp),
  [prop + 'l']: spaceRule(cssProp + 'Left'),
  [prop + 'r']: spaceRule(cssProp + 'Right'),
  [prop + 't']: spaceRule(cssProp + 'Top'),
  [prop + 'b']: spaceRule(cssProp + 'Bottom'),
  [prop + 'x']: [ spaceRule(cssProp + 'Left'), spaceRule(cssProp + 'Right') ],
  [prop + 'y']: [ spaceRule(cssProp + 'Top'), spaceRule(cssProp + 'Bottom') ]
})

/**
 * ```js
 * import { margin } from 'pss'
 * ```
 *
 * Same as {@link space} but for full margin css props.
 *
 * @param {Object} props
 *
 * @example
 * import { margin } from 'pss'
 *
 * const Box = styled.div`
 *   ${margin}
 * `
 *
 * @example
 * <Box margin={1} /> // → margin: 4px
 * <Box marginLeft={0} /> // → margin-left: 0
 * <Box marginRight='auto' /> // → margin-right: auto
 * <Box marginTop='8px' /> // → margin-top: 8px
 * <Box marginBottom={3} /> // → margin-top: 16px
 */

export const margin = createSpaceStyles('margin')

/**
 * ```js
 * import { padding } from 'pss'
 * ```
 *
 * Same as {@link space} but for full padding css props.
 *
 * @param {Object} props
 *
 * @example
 * import { padding } from 'pss'
 *
 * const Box = styled.div`
 *   ${padding}
 * `
 *
 * @example
 * <Box padding={1} /> // → padding: 4px
 * <Box paddingLeft={0} /> // → padding-left: 0
 * <Box paddingRight='auto' /> // → padding-right: auto
 * <Box paddingTop='8px' /> // → padding-top: 8px
 * <Box paddingBottom={3} /> // → padding-top: 16px
 */

export const padding = createSpaceStyles('padding')

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
 * - `m` → `margin`
 * - `ml` → `margin-left`
 * - `mr` → `margin-right`
 * - `mt` → `margin-top`
 * - `mb` → `margin-bottom`
 * - `mx` → `margin-left`, `margin-right`
 * - `my` → `margin-top`, `margin-bottom`
 * - `p` → `padding`
 * - `pl` → `padding-left`
 * - `pr` → `padding-right`
 * - `pt` → `padding-top`
 * - `pb` → `padding-bottom`
 * - `px` → `padding-left`, `padding-right`
 * - `py` → `padding-top`, `padding-bottom`
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
 * <Box m={1} /> // → margin: 8px;
 * <Box ml={1} /> // → margin-left: 8px;
 *
 * // `theme.space[2]`
 * <Box my={2} /> // → margin-top: 16px; margin-bottom: 16px;
 * <Box m={-2} /> // → margin: -16px;
 *
 * // `theme.space[0]`
 * <Box m={0} /> // → margin: 0;
 *
 * // Responsive
 * <Box mr={{ sm: -1 }} /> // → @media (max-width: 600px) { margin-right: -8px }
 * <Box mr={{ all: 2, sm: -1 }} /> // → margin-right: 16px; @media (max-width: 600px) { margin-right: -8px }
 *
 * // Custom values
 * <Box mx='auto' /> // → margin-left: auto; margin-right: auto
 * <Box my='100px' /> // → margin-top: 100px; margin-bootom: 100px
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
 * <Box m={1} /> // → margin: 10px; @media (max-width: 600px) { margin: 8px }
 * <Box ml={1} /> // → margin-left: 10px; @media (max-width: 600px) { margin-left: 8px }
 *
 * // `theme.space.all[2]` and `theme.space.sm[2]`
 * <Box my={2} /> // → margin-top: 20px; margin-bottom: 20px; @media (max-width: 600px) { margin-top: 16px; margin-bottom: 16px }
 * <Box m={-2} /> // → margin: -20px; @media (max-width: 600px) { margin: -16px; }
 *
 * // `theme.space.all[0]` and `theme.space.sm[0]`
 * <Box m={0} /> // → margin: 0; @media (max-width: 600px) { margin: 0 }
 *
 * // Responsive
 * <Box mr={{ sm: -1 }} /> // → @media (max-width: 600px) { margin-right: -8px }
 * <Box mr={{ all: 2, sm: -1 }} /> // → margin-right: 20px; @media (max-width: 600px) { margin-right: -8px }
 */

export const space = combineStyles(
  createAliasSpaceStyles('m', 'margin'),
  createAliasSpaceStyles('p', 'padding')
)
