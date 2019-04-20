import { isStr } from '@exah/utils'
import { style } from '../core'

const touchStyle = { WebkitOverflowScrolling: 'touch' }
const notTouch = (item) => item !== 'touch'

export function overflowValue (input) {
  if (isStr(input)) {
    const parsed = input.split(/\s+/)
    const values = parsed.filter(notTouch)
    const isTouch = parsed.length !== values.length

    if (values.length === 1) {
      return {
        overflow: values[0],
        ...isTouch && touchStyle
      }
    }

    return {
      overflowX: values[0],
      overflowY: values[1],
      ...isTouch && touchStyle
    }
  }
}

/**
 * ```js
 * import { overflow } from 'pss'
 * ```
 *
 * Shorthand for `overflow-x`, `overflow-y` and `-webkit-overflow-scrolling`.
 *
 * Related: {@link style}.
 *
 * @param {Object} props
 *
 * @example
 * import { overflow } from 'pss'
 *
 * const Box = styled.div`
 *   ${overflow}
 * `
 *
 * @example
 * <Box overflow='hidden' /> // overflow: hidden
 * <Box overflow='hidden auto' /> // overflow-x: hidden; overflow-y: auto
 * <Box overflow='auto touch' /> // overflow: auto; -webkit-overflow-scrolling: touch
 */

export const overflow = style({
  prop: 'overflow',
  getValue: overflowValue
})
