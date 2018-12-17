import {
  isFn,
  isObj,
  toArr,
  reduceObj,
  mapObj
} from '@exah/utils'

import {
  MEDIA_KEY
} from '../constants'

import {
  getMedia,
  getDefault,
  getThemeMedia
} from '../getters'

import {
  wrapIfMedia,
  handlePropStyle
} from '../utils'

import {
  propType
} from '../prop-type'

/**
 * ```js
 * import pss from 'pss'
 * import { createStyles } from 'pss'
 * ```
 *
 * Create styles from {@link Object} with keys that represents component `prop` and
 * the value is a `style` that will be applied.
 *
 * ```js
 * { [prop]: style | (input, props, mediaKey) => style }
 * ```
 *
 * - `input` - prop value
 * - `props` {@link Object} - component props, including `theme`
 * - `mediaKey` {@link Object} - key in `theme.media`
 *
 *
 * In component prop accepts values:
 *
 * - {@link Boolean} — enable / disable default style value
 *
 *    ```js
 *    const Comp = styled.div(createStyles({ red: { color: 'red' } }))
 *
 *    <Comp red={true} /> // → color: red
 *    <Comp red={false} /> // → 🤷‍♂️
 *    ```
 *
 * - {@link String}, {@link Number} or {@link Array} — handled in functional styles
 *
 *    ```js
 *    const Comp = styled.div(createStyles({ width: (input) => ({ width: input } })))
 *
 *    <Comp width='100px' /> // → width: 100px
 *    ```
 *
 * - {@link Object} with keys defined in `theme.media` to define values for different screen sizes
 *
 *    ```js
 *    <Comp width={{ all: '100px', sm: '50px' }} /> // → width: 100px; @media (max-width: 600px) { width: 50px }
 *    ```
 *
 *
 *
 * @param {Object} [styles = {}]
 * @return {Function} `(props) => styles`
 *
 * @example
 * import { createStyles } from 'pss'
 *
 * const styles = createStyles({
 *   display: value => ({ display: value }),
 *   hide: { display: 'none' },
 *   width: (value, props, mediaKey) => ({
 *     width: mediaKey === 'sm' && value === true ? '100%' : value
 *   })
 * })
 *
 * const Box = styled.div`
 *   ${styles}
 * `
 *
 * Box.propTypes = {
 *   ...styles.propTypes
 * }
 *
 * @example
 * <Box display='inline-flex' /> // → display: inline-flex
 * <Box hide /> // → display: none
 *
 *
 * @example
 * // Add media queries
 * const theme = {
 *   media: {
 *     sm: '(max-width: 600px)'
 *   }
 * }
 *
 * <Box theme={theme} width={{ all: '100px', sm: true }} /> // → width: 100px; @media (max-width: 600px) { width: 100% }
 *
 * <ThemeProvider theme={theme}>
 *   <Box display='flex' hide={{ sm: true }} /> // → display: flex; @media (max-width: 600px) { display: none }
 * </ThemeProvider>
 */

export function createStyles (styles) {
  function propStyles (props) {
    const media = getThemeMedia(props)
    const defaultMediaKey = getDefault(MEDIA_KEY)(props)

    function mapPropStyles (input, mediaKey, style) {
      const mediaQuery = getMedia(
        mediaKey === undefined ? defaultMediaKey : mediaKey,
        media
      )

      // selectors
      if (isFn(input)) {
        return wrapIfMedia(
          mediaQuery,
          input(props, mediaKey, style)
        )
      }

      // value with `theme.media` keys: { all: 0, M: 1 }
      if (isObj(input)) {
        return mapObj((key, value) => (
          mapPropStyles(value, key, style)
        ), input)
      }

      // general prop style
      return wrapIfMedia(
        mediaQuery,
        handlePropStyle(style, input, props, mediaKey)
      )
    }

    return reduceObj(
      (acc, propName, propValue) => acc.concat(
        toArr(styles[propName])
          .map((style) => mapPropStyles(propValue, undefined, style) || [])
      ),
      [],
      props
    )
  }

  const propTypes = mapObj((key) => ({ [key]: propType }), styles)

  return Object.assign(propStyles, { propTypes })
}
