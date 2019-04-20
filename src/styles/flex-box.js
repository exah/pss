import { createStyles, rule } from '../core'
import { addPrefix } from '../utils'

export const createFlexBoxStyle = ({ prefix } = {}) => createStyles({
  [addPrefix('wrap', prefix)]: rule('flexWrap'),
  [addPrefix('direction', prefix)]: rule('flexDirection')
})

/**
 * ```js
 * import { flexBox } from 'pss'
 * ```
 *
 * Styles for [Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#The_flex_container).
 *
 * For alignment styles import {@link boxContentAlignment}, {@link boxItemsAlignment}.
 *
 * prop             | css               | type     | value | true
 * :----------------|:----------------- |:---------|:------|:-------
 * `flexWrap`       | `flex-wrap`       | `String` | ✓     | —
 * `flexDirection`  | `flex-direction`  | `String` | ✓     | —
 *
 * Related: {@link boxContentAlignment}, {@link boxItemsAlignment}, {@link rule}.
 *
 * @param {Object} props
 *
 * @example
 * import { flexBox } from 'pss'
 *
 * const FlexBox = styled.div`
 *   display: flex;
 *   ${flexBox}
 * `
 *
 * @example
 * <FlexBox flexDirection='column' flexWrap='wrap'> // display: flex; flex-direction: column; flex-wrap: wrap;
 *   <div>1</div>
 *   <div>2</div>
 * </FlexBox>
 */

export const flexBox = createFlexBoxStyle({ prefix: 'flex' })
