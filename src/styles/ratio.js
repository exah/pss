import { isNum } from '@exah/utils'
import { createStyles } from '../core'
import { floor } from '../utils'

/**
 * ```js
 * import { ratio } from 'pss'
 * ```
 *
 * [Aspect Ratio Box](https://css-tricks.com/aspect-ratio-boxes/) prop style
 * with pseudo elements.
 *
 * @param {Object} props
 *
 * @example
 * import { ratio } from 'pss'
 *
 * const Box = styled.div`
 *   ${ratio}
 * `
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

const ratio = createStyles({
  ratio: (value) => {
    if (value === true || isNum(value)) {
      const size = value === true ? '100%' : floor((100 / value), 2) + '%'

      return {
        '&::before': {
          content: "''",
          width: 0,
          float: 'left',
          paddingBottom: size
        },
        '&::after': { // clearfix
          content: "''",
          display: 'block',
          clear: 'both'
        }
      }
    }
  }
})

export {
  ratio
}
