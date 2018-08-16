import { sizeProp, createPropStyles } from '../core'

/**
 * Alias **`sizePropsStyles`**
 *
 * ```js
 * import { sizes } from 'pss'
 * ```
 *
 * Consistent `sizes` system for `width`, `height`. Created with {@link sizeProp}.
 *
 * **Component props:**
 *
 * - `wd` → `width`
 * - `maxWd` → `max-width`
 * - `minWd` → `min-width`
 * - `ht` → `height`
 * - `maxHt` → `max-height`
 * - `minHt` → `min-height`
 *
 *
 * **`String` values:**
 *
 * - Get value by path in `theme.size` or in top level `theme` object
 * - If value in `theme.sizes` is an `Object` with media keys (like in `theme.media`) value is responsive
 * - Other `String` values is passed as raw CSS value (like `'10%'` or `'100vh'`).
 *
 *
 * **`Number` values:**
 *
 * - From 0-1 it is converted to percentage widths
 * - Greater than 1 are converted to pixel values.
 *
 *
 * **`Boolean` values:**
 *
 * - `true` is `100%`
 * - `false` is `0`.
 *
 *
 * Examples use this [`theme`](#createtheme):
 *
 * ```js
 * const theme = createTheme({
 *   media: {
 *     M: `(max-width: 600px)`
 *   },
 *   size: {
 *     small: '10px',
 *     medium: '20px',
 *     block: {
 *       default: '500px',
 *       M: '300px'
 *     }
 *   },
 *   site: {
 *     width: '1300px'
 *   }
 * })
 * ```
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
