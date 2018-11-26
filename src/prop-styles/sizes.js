import { createSize, createPropStyles } from '../core'

/**
 * ```js
 * import { sizes } from 'pss'
 * ```
 *
 * Consistent `sizes` system for `width`, `height`. Created with {@link createSize}.
 *
 * **Component props:**
 *
 * - `width` → `width`
 * - `maxWidth` → `max-width`
 * - `minWidth` → `min-width`
 * - `height` → `height`
 * - `maxHeight` → `max-height`
 * - `minHeight` → `min-height`
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
 * Examples use this `theme`:
 *
 * ```js
 * const theme = {
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
 * }
 * ```
 *
 * @example
 * import { sizes } from 'pss'
 * import styled from 'react-emotion'
 *
 * const Box = styled.div(sizes)
 *
 * @example
 * // theme.size.small
 * <Box height='small' /> // height: 10px
 *
 * // `theme.size.card.default` and `theme.size.card.M`
 * <Box width='card' /> // width: 500px; @media (max-width: 600px) { margin-left: 300px }
 *
 * // only `theme.size.card.M`
 * <Box widthM='card' /> // @media (max-width: 600px) { margin-left: 300px }
 *
 * // `theme.site.width`
 * <Box maxWidth='site.width' /> // max-width: 1300px
 *
 * // Smaller that or equal to `1` is percentage value
 * <Box maxWidth={(1 / 2)} /> // max-width: 50%
 *
 * // By default `false` is `0`
 * <Box height={false} /> // height: 0
 *
 * // Convert to px
 * <Box minWidth={500} /> // max-width: 500px
 */

const sizes = createPropStyles({
  height: createSize('height'),
  width: createSize('width'),
  maxWidth: createSize('maxWidth'),
  maxHeight: createSize('maxHeight'),
  minHeight: createSize('minHeight'),
  minWidth: createSize('minWidth')
})

export {
  sizes
}
