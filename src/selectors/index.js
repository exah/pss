import { curryN } from '@exah/utils'
import { wrap, px } from '../utils'

/**
 * ```js
 * import { ps } from 'pss'
 * ```
 *
 * Wrap result of prop style in custom CSS selector.
 *
 * @param {string} [name] — CSS selector, like `&:first-child`, `& + &`
 * @param {PropStyleValue} [value] — prop value
 *
 * @example
 * import { space } from 'pss'
 *
 * const Box = styled.div`
 *   ${space}
 * `
 *
 * @example
 * import { ps } from 'pss'
 *
 * <Box mgt={ps('& + &', 1)} />
 *
 * @example
 * .css + .css { margin-top: 10px }
 * \@media (max-width: 600px) { .css + .css { margin-top: 8px } }
 */

const propSelector = curryN(2, (name, value) => (props, style) =>
  wrap(name, style(value))
)

/**
 * ```js
 * import { ts, themePath } from 'pss'
 * ```
 *
 * Get value from `theme` directly in prop
 *
 * @example
 * const Box = styled.div`
 *   ${sizes}
 * `
 *
 * <Box width={ts((theme) => theme.myValue)}
 * <Box width={ts(themePath('site.width'))}
 */

const themeSelector = (fn) => (props, style) => style(px(fn(props.theme)))

/**
 * ```js
 * import { cs } from 'pss'
 * ```
 *
 * Combine any number of {@link propSelector}s.
 *
 * @example
 * import { space } from 'pss'
 *
 * const Box = styled.div`
 *   ${space}
 * `
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

const combineSelectors = (...selectors) => (props, style) => selectors.map(
  (selectorOrValue) => style(selectorOrValue)
)

export {
  propSelector,
  combineSelectors,
  themeSelector
}
