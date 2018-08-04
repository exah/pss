import { sizeProp, createPropStyles } from '../core'

/**
 * Alias **`sizePropsStyles`**
 *
 * ```js
 * import { sizes } from 'pss'
 * ```
 *
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
 * import { sizes } from 'pss'
 *
 * const Box = styled.div(sizes)
 *
 * @example
 * // theme.size.small
 * <Box ht='small' /> // height: 10px
 *
 * // `theme.size.card.default` and `theme.size.card.M`
 * <Box wd='card' /> // width: 500px; @media (max-width: 600px) { margin-left: 300px }
 *
 * // only `theme.size.card.M`
 * <Box wdM='card' /> // @media (max-width: 600px) { margin-left: 300px }
 *
 * // `theme.site.width`
 * <Box maxWd='site.width' /> // max-width: 1300px
 *
 * // Smaller that or equal to `1` is percentage value
 * <Box maxWd={(1 / 2)} /> // max-width: 50%
 *
 * // By default `false` is `0`
 * <Box ht={false} /> // height: 0
 *
 * // Convert to px
 * <Box minWd={500} /> // max-width: 500px
 */

const sizes = createPropStyles({
  ht: sizeProp('height'),
  wd: sizeProp('width'),
  maxWd: sizeProp('maxWidth'),
  maxHt: sizeProp('maxHeight'),
  minHt: sizeProp('minHeight'),
  minWd: sizeProp('minWidth')
})

export {
  sizes
}
