import { createStyles, rule } from '../core'
import { boolValue } from '../values'

/**
 * ```js
 * import { ellipsis } from 'pss'
 * ```
 *
 * Add [ellipsis](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) to text.
 *
 * @example
 * import { ellipsis } from 'pss'
 *
 * const Text = styled.p`
 *   ${ellipsis}
 * `
 *
 * @example
 * <Text ellipsis /> // → white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
 */

const ellipsis = createStyles({
  ellipsis: [
    { whiteSpace: 'nowrap', overflow: 'hidden' },
    rule('textOverflow', boolValue('ellipsis'))
  ]
})

export {
  ellipsis
}
