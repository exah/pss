import { createStyles, rule } from '../core'
import { boolValue, sizeValue } from '../values'

/**
 * ```js
 * import { flex } from 'pss'
 * ```
 *
 * [Flex container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#The_flex_container) prop styles.
 *
 * prop             | css               | type                | value | true            | false
 * :----------------|:----------------- |:--------------------|:------|:----------------|:--------
 * `flexWrap`       | `flex-wrap`       | `String`, `Boolean` | ✓     | `wrap`          | `nowrap`
 * `flexDirection`  | `flex-direction`  | `String`            | ✓     | —               | —
 * `alignItems`     | `align-items`     | `String`            | ✓     | —               | —
 * `alignContent`   | `align-content`   | `String`            | ✓     | —               | —
 * `justifyContent` | `justify-content` | `String`            | ✓     | `space-between` | `normal`
 *
 * Related: {@link rule}, {@link boolValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { flex } from 'pss'
 *
 * const FlexBox = styled.div`
 *   display: flex;
 *   ${flex}
 * `
 *
 * @example
 * <FlexBox alignItems='center' flexWrap={true}> // display: flex; flex-wrap: wrap; align-items: center
 *   <div>1</div>
 *   <div>2</div>
 * </FlexBox>
 */

const flex = createStyles({
  flexWrap: rule('flexWrap', boolValue('wrap', 'nowrap')),
  flexDirection: rule('flexDirection'),
  alignItems: rule('alignItems'),
  alignContent: rule('alignContent'),
  justifyContent: rule('justifyContent', boolValue('space-between', 'normal'))
})

/**
 * ```js
 * import { flexItem } from 'pss'
 * ```
 *
 * [Flex item](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#Properties_applied_to_flex_items) prop styles.
 *
 *
 * prop        | css           | type                 | value | true    | false
 * :-----------|:--------------|:---------------------|:------|:------- |:--------
 * `flex`      | `flex`        | `String`, `Boolean`  | ✓     | `1 1 0` | `0 1 auto`
 * `order`     | `order`       | `Number`, `Boolean`  | ✓     | `1`     | `0`
 * `alignSelf` | `align-self`  | `String`             | ✓     | —       | —
 *
 * ⚠️ Some of this props may not be filtered by CSS-in-JS libraries (like `order`), so you may need to provide custom prop filtering.
 *
 * Related: {@link rule}, {@link boolValue}, {@link sizeValue}.
 *
 * @example
 * import { flexItem } from 'pss'
 *
 * const FlexBoxItem = styled.div`
 *   ${flexItem}
 * `
 *
 * @example
 * <FlexBox> // display: flex
 *   <FlexBoxItem flex='1 1'>2</FlexBoxItem> // flex: 1 1
 *   <FlexBoxItem order={-1}>1</FlexBoxItem> // order: -1
 * </FlexBox>
 */

const flexItem = createStyles({
  flex: rule('flex', sizeValue(boolValue('1 1 0', '0 1 auto'))),
  order: rule('order', boolValue(1, 0)),
  alignSelf: rule('alignSelf')
})

export {
  flex,
  flexItem
}
