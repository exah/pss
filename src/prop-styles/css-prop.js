import { createPropStyles } from '../core'
import { cssPropPropType } from '../prop-types'

/**
 * ```js
 * import { cssProp } from 'pss'
 * ```
 *
 * Dynamic CSS prop like in [glamorous](https://glamorous.rocks).
 * You don't need this if your CSS-in-JS library of choice support it.
 *
 * Implementation:
 *
 * ```js
 * const cssProp = createPropStyles({
 *   css: (val) => ({ ...val })
 * })
 * ```
 *
 * @example
 * import { cssProp } from 'pss'
 *
 * const Box = styled.div`
 *   ${cssProp}
 * `
 *
 * @example
 * <Box css={{ color: 'red', display: 'flex' }} /> // → color: red; display: flex
 * <Box css={(props) => ({ color: props.theme.color.red })} /> // → color: #ff0000
 */

const cssProp = createPropStyles({
  css: (val) => ({ ...val })
})

cssProp.propTypes = {
  css: cssPropPropType
}

export {
  cssProp
}
