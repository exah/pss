import { createPropStyles, createSpace } from '../core'
import { combine } from '../utils'

const marginPropStyles = createPropStyles(createSpace('margin', 'mg'))
const paddingPropStyles = createPropStyles(createSpace('padding', 'pd'))

/**
 * ```js
 * import { space } from 'pss'
 * ```
 *
 * Consistent `space` system for setting `margin` or `padding`. Created with {@link createSpace}.
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
 *
 * **`Number` values:**
 *
 * - Value from `theme.space[mediaKey]`, `theme.space.default` or `theme.space` `Array` by index
 * - Negative value for negative margins
 *
 *
 * **`Boolean` values:**
 *
 * - `true` value is equal to `1` index in space `Array`
 * - `false` value is equal to `0` index in space `Array`
 *
 *
 * **`String` values:**
 *
 * - Used as plain CSS value (like `'10%'`, `'1em'` or `'100vh'`)
 *
 *
 * <br /> Examples use this `theme`:
 *
 * ```js
 * const theme = {
 *   media: {
 *     sm: `(max-width: 600px)`
 *   },
 *   space: {
 *     default: [ 0, 10, 20, 40, 80 ],
 *     sm: [ 0, 8, 16, 32, 64 ],
 *   }
 * }
 * ```
 *
 *
 * @example
 * import { space } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Box = styled.div(space)
 *
 * @example
 * <Box mg={1} /> // .css { margin: 10px; @media (max-width: 600px) { margin: 8px } }
 * <Box mgl={1} /> // .css { margin-left: 10px; @media (max-width: 600px) { margin-left: 8px } }
 * <Box mgt={true} /> // .css { margin-top: 10px; @media (max-width: 600px) { margin-top: 8px } }
 * <Box mgx='auto' /> // .css { margin-left: auto; margin-right: auto }
 * <Box mgy={2} /> // .css { margin-top: 20px; margin-bottom: 20px; @media (max-width: 600px) { margin-top: 16px; margin-bottom: 16px } }
 * <Box mg={-2} /> // .css { margin: -20px; @media (max-width: 600px) { margin: -16px; } }
 * <Box mg={0} /> // .css { margin: 0 }
 * <Box mgr={{ sm: -1 }} /> // @media (max-width: 600px) { .css { margin-right: -8px } }
 * <Box mgr={{ default: 2, sm: -1 }} /> // .css { margin-right: 20px; @media (max-width: 600px) { margin-right: -8px } }
 */

const space = combine(marginPropStyles, paddingPropStyles)

export {
  marginPropStyles,
  paddingPropStyles,
  space
}
