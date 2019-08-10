import { createStyles } from './create-styles'

/**
 * Combine multiple styles together
 *
 * @example
 * import { combineStyles } from 'pss'
 *
 * @example
 * import { combineStyles, margin, padding } from 'pss'
 *
 * const space = combineStyles(
 *   margin,
 *   padding
 * )
 *
 * const Space = styled.div`
 *   ${space}
 * `
 */

export const combineStyles = (...fns) => createStyles(fns.reduce((acc, fn) => ({
  ...acc,
  ...fn.styles
}), {}))
