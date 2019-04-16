import { createStyles } from '../core'
import { sizeRule } from '../rules'

/**
 * ```js
 * import { sizes } from 'pss'
 * ```
 *
 * Consistent `sizes` system for `width`, `height`. Created with {@link sizeValue}.
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
 * Related: {@link sizeValue}, {@link space}.
 *
 * Examples use this `theme`:
 *
 * ```js
 * const theme = {
 *   media: {
 *     sm: `(max-width: 600px)`
 *   },
 *   size: {
 *     small: '10px',
 *     medium: '20px',
 *     card: {
 *       all: '500px',
 *       sm: '300px'
 *     }
 *   }
 * }
 * ```
 *
 * @param {Object} props
 *
 * @example
 * import { sizes } from 'pss'
 *
 * const Box = styled.div`
 *   ${sizes}
 * `
 *
 * @example
 * // `theme.size.small`
 * <Box height='small' /> // → height: 10px
 *
 * // `theme.size.card.default` and `theme.size.card.sm`
 * <Box width='card' /> // → width: 500px; @media (max-width: 600px) { margin-left: 300px }
 *
 * // only `theme.size.card.sm`
 * <Box width={{ sm: 'card' }} /> // → @media (max-width: 600px) { margin-left: 300px }
 *
 * // Numbers smaller that or equal to `1` is percentage value
 * <Box maxWidth={(1 / 2)} /> // → max-width: 50%
 * <Box width={1} /> // → width: 100%
 *
 * // Convert numbers bigger that `1` to px
 * <Box minWidth={500} /> // → min-width: 500px
 *
 * // Literal string values
 * <Box minHeight='1px' /> // → max-height: 1px
 */

const sizes = createStyles({
  height: sizeRule('height'),
  width: sizeRule('width'),
  maxWidth: sizeRule('maxWidth'),
  maxHeight: sizeRule('maxHeight'),
  minHeight: sizeRule('minHeight'),
  minWidth: sizeRule('minWidth')
})

export {
  sizes
}
