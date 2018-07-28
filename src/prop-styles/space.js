import { createPropStyles, createSpaceProps } from '../core'
import { combine } from '../utils/fns'

const marginPropStyles = createPropStyles(createSpaceProps('margin', 'mg'))
const paddingPropStyles = createPropStyles(createSpaceProps('padding', 'pd'))

/**
 * Alias **`space`**, also **`marginPropStyles`**, **`paddingPropStyles`**
 *
 * ```js
 * import { space } from 'pss'
 * ```
 *
 * Ready to use space prop styles created with {@link createSpaceProps} for setting both `margin` with `mg` prop and `padding` with `pd` prop.
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
 * @example
 * import styled from 'react-emotion'
 * import { space } from 'pss'
 *
 * const Box = styled.div(space)
 *
 * @example
 * <Box mg /> // .css { margin: 10px; @media (max-width: 600px) { margin: 8px } }
 * <Box mgl /> // .css { margin-left: 10px; @media (max-width: 600px) { margin-left: 8px } }
 * <Box mgt /> // .css { margin-top: 10px; @media (max-width: 600px) { margin-top: 8px } }
 * <Box mgx='auto' /> // .css { margin-left: auto; margin-right: auto }
 * <Box mgy={2} /> // .css { margin-top: 20px; margin-bottom: 20px; @media (max-width: 600px) { margin-top: 16px; margin-bottom: 16px } }
 * <Box mg={-2} /> // .css { margin: -20px; @media (max-width: 600px) { margin: -16px; } }
 * <Box mg={0} /> // .css { margin: 0 }
 * <Box mgrM={-1} /> // @media (max-width: 600px) { .css { margin-right: -8px } }
 * <Box mgr={2} mgrM={-1} /> // .css { margin-right: 20px; @media (max-width: 600px) { margin-right: -8px } }
 */

const spacePropStyles = combine(marginPropStyles, paddingPropStyles)

export {
  marginPropStyles,
  paddingPropStyles,
  spacePropStyles
}
