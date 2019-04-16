import { createStyles, rule } from '../core'

/**
 * ```js
 * import { ellipsis } from 'pss'
 * ```
 *
 * Info: [text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow).
 *
 * Related: {@link rule}.
 *
 * @param {Object} props
 *
 * @example
 * import { textOverflow } from 'pss'
 *
 * const Text = styled.p`
 *   ${textOverflow}
 * `
 *
 * @example
 * <Text textOverflow='ellipsis' /> // → white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
 */

const textOverflow = createStyles({
  textOverflow: [
    { whiteSpace: 'nowrap', overflow: 'hidden' },
    rule('textOverflow')
  ]
})

export {
  textOverflow
}
