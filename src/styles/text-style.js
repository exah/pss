import { variant } from '../core'

/**
 * ```js
 * import { textStyle } from 'pss'
 * ```
 *
 * Global text styles system, like in [Sketch](https://sketchapp.com/docs/text/text-styles).
 *
 * Related: {@link variant}, {@link text}.
 *
 * Add `textStyle` to `theme`:
 *
 * ```js
 * const theme = {
 *   textStyle: {
 *     default: {
 *       fontSize: '16px',
 *       lineHeight: 1.2,
 *       fontWeight: 'normal',
 *       fontFamily: 'system-ui'
 *     },
 *     heading: {
 *       fontSize: '2rem',
 *       lineHeight: 1.2,
 *       fontWeight: 'bold',
 *       fontFamily: 'system-ui'
 *     }
 *   }
 * }
 * ```
 *
 * @param {Object} props
 *
 * @example
 * import { textStyle } from 'pss'
 *
 * const Box = styled.div`
 *   ${textStyle}
 * `
 *
 * @example
 * <Box textStyle /> // → `theme.textStyle.default`
 * <Box textStyle='heading' /> // → `theme.textStyle.heading`
 *
 * @example
 * const Text = styled.div`
 *   ${textStyle.variant}
 * `
 *
 * <Text variant /> // → `theme.textStyle.default`
 * <Text variant='heading' /> // → `theme.textStyle.heading`
 */

const textStyle = variant({
  themeKey: 'textStyle',
  prop: 'textStyle'
})

export {
  textStyle
}
