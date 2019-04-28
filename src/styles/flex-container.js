import { createStyles, rule } from '../core'
import { addPrefix } from '../utils'

export const createFlexContainer = (prefix) => createStyles({
  [addPrefix(prefix, 'wrap')]: rule('flexWrap'),
  [addPrefix(prefix, 'direction')]: rule('flexDirection')
})

/**
 * ```js
 * import { flexContainer } from 'pss'
 * ```
 *
 * [Flexible Box Layout Container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#The_flex_container) styles. For alignment use {@link boxContentAlignment}, {@link boxItemsAlignment}.
 *
 * prop             | css               | theme    | value | default
 * :----------------|:----------------- |:---------|:------|:-------
 * `flexWrap`       | `flex-wrap`       | —        | ✓     | —
 * `flexDirection`  | `flex-direction`  | —        | ✓     | —
 *
 * Related: {@link rule}.
 *
 * @param {Object} props
 *
 * @example
 * import { flexContainer } from 'pss'
 *
 * const Flex = styled.div`
 *   display: flex;
 *   ${flexContainer}
 * `
 *
 * @example
 * <Flex flexDirection='column' flexWrap='wrap'> // display: flex; flex-direction: column; flex-wrap: wrap;
 *   <div>1</div>
 *   <div>2</div>
 * </Flex>
 */

export const flexContainer = createFlexContainer('flex')
