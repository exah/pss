import { toObj } from '@exah/utils'
import { createPropStyles } from '../core'

/**
 * ```js
 * import { cssProp } from 'pss'
 * ```
 *
 * Dynamic CSS prop like in [glamorous](https://glamorous.rocks).
 * You don't need it if yours CSS-in-JS library support it natively.
 *
 * Simple implementation:
 *
 * ```js
 * const cssProp = createPropStyles({
 *   css: (val) => ({ ...val })
 * })
 * ```
 *
 * @example
 * import styled from 'react-emotion'
 * import { cssProp } from 'pss'
 *
 * const Box = styled.div(cssProp)
 *
 * @example
 * <Box
 *   css={{ color: 'red', display: 'flex' }}
 *   cssM={{ color: 'yellow' }}
 * />
 * // color: red; display: flex
 * // @media (max-width: 600px) { color: yellow }
 *
 * <Box css={(props) => ({ color: props.color.red })} />
 * // color: #ff0000
 */

const cssProp = createPropStyles({
  css: (val) => toObj(val)
})

export {
  cssProp
}
