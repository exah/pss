import { createStyles, mediaStyle } from '../core'

/**
 * ```js
 * import { hide } from 'pss'
 * ```
 *
 * prop       | css              | type                 | value    | true      | false
 * :----------|:-----------------|:---------------------|:---------|:--------- |:--------
 * `hide`   | `display: none`  | key in `theme.media` | mediaKey | —         | —
 *
 * Related: {@link display}, {@link mediaStyle}.
 *
 * @param {Object} props
 *
 * @example
 * import { hide } from 'pss'
 *
 * const Box = styled.div`
 *   ${hide}
 * `
 *
 * @example
 * <Box hide />
 * // → display: none
 *
 * <Box hide='sm' />
 * // → @media (max-width: 600px) { display: none }
 *
 * <Box hide={{ sm: true, md: true }} />
 * // → @media (max-width: 600px) { display: none }
 * // → @media (min-width: 601px) and (max-width: 1024px) { display: none }
 */

export const hide = createStyles({
  hide: mediaStyle({ display: 'none' })
})
