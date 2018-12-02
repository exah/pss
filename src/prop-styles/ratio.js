import { isNum } from '@exah/utils'

import { createPropStyles } from '../core/create-prop-styles'
import { floor } from '../utils'

/**
 * ```js
 * import { ratio } from 'pss'
 * ```
 *
 * [Aspect Ratio Box](https://css-tricks.com/aspect-ratio-boxes/) prop style
 * with pseudo elements.
 *
 * @example
 * import { ratio } from 'pss'
 *
 * const Box = styled.div(ratio)
 *
 * @example
 * <Box ratio={(16 / 9)} />
 *
 * @example
 * .css::before {
 *   content: '';
 *   width: 1px;
 *   margin-left: -1px;
 *   float: left;
 *   height: 0;
 *   padding-bottom: 56.25%;
 * }
 *
 * .css::after {
 *   content: '';
 *   display: table;
 *   clear: both;
 * }
 */

const ratio = createPropStyles({
  ratio: (value) => {
    if (value === true || isNum(value)) {
      const size = value === true ? '100%' : floor((100 / value), 2) + '%'

      return {
        '&::before': {
          content: `''`,
          width: 1,
          marginLeft: -1,
          float: 'left',
          height: 0,
          paddingBottom: size
        },
        '&::after': { // clearfix
          content: `''`,
          display: 'table',
          clear: 'both'
        }
      }
    }
  }
})

export {
  ratio
}
