import { isFn, path, isNum, isStr } from '@exah/utils'

/**
 * ```js
 * import { prop } from 'pss'
 * ```
 *
 * @example
 * import { prop, themePath, mq } from 'pss'
 *
 * const Box = styled.div`
 *  background-color: ${prop('bg')};
 *  color: ${prop('color', themePath('color.primary'))};
 *  border-color: ${prop('borderColor', 'black')};
 *  width: ${prop('width', '100%')};
 *
 *  \@media ${mq('sm')} {
 *    width: ${prop('width.sm'};
 *  }
 * `
 *
 * <Box bg='red' /> // → background-color: red; color: #0000FF; border-color: black;
 * <Box color='blue' /> // → color: blue; border-color: black;
 */

export const prop = (key, fallback) =>
  function style (props) {
    const input = path(key)(props)

    if (isNum(input) || isStr(input)) {
      return input
    }

    return isFn(fallback) ? fallback(props) : fallback
  }
