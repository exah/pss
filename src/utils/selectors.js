import { isFn } from './is'
import { themeMedia } from './getters'
import { curryN, identity } from './fns'
import { handlePropStyle, wrapIfMedia, toObj, toArr } from './helpers'

/**
 * Alias **`ps`**
 *
 * ```js
 * import { ps } from 'pss'
 * ```
 *
 * Wrap result of prop style in custom CSS selector.
 *
 * @param {string} [name] — CSS selector, like `&:first-child`, `& + &`
 * @param {PropStyleVal} [value] — prop value
 *
 * @example
 * import styled from 'react-emotion'
 * import { space } from 'pss'
 *
 * const Box = styled.div(space)
 *
 * @example
 * import { ps } from 'pss'
 *
 * <Box mgt={ps('& + &', 1)} />
 *
 * @example
 * .css + .css { margin-top: 10px }
 * @media (max-width: 600px) { .css + .css { margin-top: 8px } }
 */

const propSelector = curryN(2, (name, value) => (props, mediaKey, style) => ({
  [name]: handlePropStyle(style, value, props, mediaKey)
}))

/**
 * Alias **`mps`**
 *
 * ```js
 * import { mps } from 'pss'
 * ```
 *
 * Wrap result of prop style in media query from `theme.media` by key.
 *
 * @param {string} [mediaKeyAndQuery] — key in `theme.media`
 * @param {PropStyleVal} [value] — prop value
 *
 * @example
 * import styled from 'react-emotion'
 * import { mps, space } from 'pss'
 *
 * const Box = styled.div(space)
 *
 * @example
 * <Box mgt={mps('M', 1)} />
 *
 * @example
 * const mobile = mps('M')
 *
 * <Box mgt={mobile(1)} />
 *
 * @example
 * @media (max-width: 600px) { margin-top: 8px }
 */

const mediaPropSelector = curryN(2, (mediaKeyAndQuery, value) => {
  const [ mediaKey, customQuery ] = toArr(mediaKeyAndQuery)
  const styleFromValue = combineSelectors(value)

  return (props, propMediaKey, style) => wrapIfMedia(
    customQuery || themeMedia(props.theme)[mediaKey],
    toObj(styleFromValue(props, mediaKey, style))
  )
})

/**
 * Alias **`ts`**
 *
 * ```js
 * import { sizes, ts } from 'pss'
 * ```
 *
 * Get value from `theme` directly in prop
 *
 * const Box = styled.div(sizes, ts)
 *
 * @example
 * <Box wd={ts((theme) => theme.myValue)}
 */

const themeSelector = (fn) => (props, mediaKey, style = identity) => handlePropStyle(
  style,
  fn(props.theme),
  props,
  mediaKey,
  true
)

/**
 * Alias **`cs`**
 *
 * ```js
 * import { cs } from 'pss'
 * ```
 *
 * Combine any number of {@link propSelector}s.
 *
 * @example
 * import styled from 'react-emotion'
 * import { space } from 'pss'
 *
 * const Box = styled.div(space)
 *
 * @example
 * import { cs, ps } from 'pss'
 *
 * <Box mgt={cs(2, ps('& + &', 1), ps('&:nth-of-type(2)', 0))} />
 *
 * @example
 * .css { margin-top: 20px }
 * .css + .css { margin-top: 10px }
 * .css:nth-of-type(2) { margin-top: 0 }
 *
 * \@media (max-width: 600px) {
 *   .css { margin-top: 16px }
 *   .css + .css { margin-top: 8px }
 * }
 */

const combineSelectors = (...selectors) => (props, mediaKey, style) => selectors.map(
  (selectorOrValue) => isFn(selectorOrValue)
    ? selectorOrValue(props, mediaKey, style)
    : handlePropStyle(style, selectorOrValue, props, mediaKey)
)

export {
  propSelector,
  combineSelectors,
  mediaPropSelector,
  themeSelector
}
