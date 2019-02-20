import { createStyles, mediaStyle } from '../core'

/**
 * ```js
 * import { hideOn } from 'pss'
 * ```
 *
 * prop       | css              | type                 | value    | true      | false
 * :----------|:-----------------|:---------------------|:---------|:--------- |:--------
 * `hideOn`   | `display: none`  | key in `theme.media` | mediaKey | —         | —
 *
 * Related: {@link display}, {@link mediaStyle}.
 *
 * @param {Object} props
 *
 * @example
 * import { hideOn } from 'pss'
 *
 * const Box = styled.div`
 *   ${hideOn}
 * `
 *
 * @example
 * <Box hideOn='sm' />
 * // @media (max-width: 600px) { display: none }
 *
 * <Box hideOn={{ sm: true, md: true }} />
 * // @media (max-width: 600px) { display: none }
 * // @media (min-width: 601px) and (max-width: 1024px) { display: none }
 */

const hideOn = createStyles({
  hideOn: mediaStyle({ display: 'none' })
})

export {
  hideOn
}
