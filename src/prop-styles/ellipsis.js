import { createPropStyles } from '../core'

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
 * const Text = styled('p')(ellipsis)
 *
 * @example
 * <Text ellipsis /> // → white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
 */

const ellipsis = createPropStyles({
  ellipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
})

export {
  ellipsis
}
