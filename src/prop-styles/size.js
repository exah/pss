import { sizeProp, createPropStyles } from '../core'

/**
 * Alias **`sizes`**
 *
 * ```js
 * import { sizes } from '@exah/prop-styles-system'
 * ```
 * Ready to use size prop styles created with {@link sizeProp}.
 *
 * - `wd` → `width`
 * - `maxWd` → `max-width`
 * - `minWd` → `min-width`
 * - `ht` → `height`
 * - `maxHt` → `max-height`
 * - `minHt` → `min-height`
 *
 * Additionaly `true` prop value is `100%` and `false` is `0`.
 *
 * @example
 * import styled from 'react-emotion'
 * import { sizes } from '@exah/prop-styles-system'
 *
 * const Box = styled.div(sizes)
 *
 * // Result
 * <Box ht='small' /> // .css { height: 10px }
 * <Box wd='card' /> // .css { width: 500px; @media (max-width: 600px) { margin-left: 300px } }
 * <Box maxWd /> // .css { max-width: 100% }
 * <Box ht={false} /> // .css { height: 0 }
 * <Box maxWd='site.width' /> // .css { max-width: 1300px }
 */

const sizePropsStyles = createPropStyles({
  ht: sizeProp('height'),
  wd: sizeProp('width'),
  maxWd: sizeProp('maxWidth'),
  maxHt: sizeProp('maxHeight'),
  minHt: sizeProp('minHeight'),
  minWd: sizeProp('minWidth')
})

export {
  sizePropsStyles
}
