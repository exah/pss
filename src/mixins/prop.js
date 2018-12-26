import { isFn } from '@exah/utils'

/**
 * ```js
 * import { prop } from 'pss'
 * ```
 *
 * @example
 * import { prop, themePath } from 'pss'
 *
 * const Box = styled.div`
 *  background-color: ${prop('bg')};
 *  color: ${prop('color', themePath('colors.primary'))};
 *  border-color: ${prop('borderColor', 'black')};
 * `
 *
 * <Box bg='red' /> // → background-color: red; color: #0000FF; border-color: black;
 * <Box color='blue' /> // → color: blue; border-color: black;
 */

export const prop = (propName, fallback) => (props) => {
  const input = props[propName]

  if (input == null) {
    return isFn(fallback) ? fallback(props) : fallback
  }

  return input
}
