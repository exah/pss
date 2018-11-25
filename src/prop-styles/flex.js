import { createPropStyles, createSizeProp, ruleProp } from '../core'

const flexWrap = ruleProp('flexWrap', 'wrap', 'nowrap')
const flexDirection = ruleProp('flexDirection')
const alignItems = ruleProp('alignItems')
const alignContent = ruleProp('alignContent')
const justifyContent = ruleProp('justifyContent', 'space-between', 'normal')

/**
 * ```js
 * import { flex } from 'pss'
 * ```
 *
 * [Flex container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#The_flex_container) prop styles
 *
 * prop                        | css               | type                | value | true            | false
 * :---------------------------|:----------------- |:--------------------|:------|:----------------|:--------
 * `flexWrap`, `wrap`          | `flex-wrap`       | `String`, `Boolean` | ✓     | `wrap`          | `nowrap`
 * `flexDirection`             | `flex-direction`  | `String`            | ✓     | —               | —
 * `alignItems`, `align`       | `align-items`     | `String`            | ✓     | —               | —
 * `alignContent`              | `align-content`   | `String`            | ✓     | —               | —
 * `justifyContent`, `justify` | `justify-content` | `String`            | ✓     | `space-between` | `normal`
 * `inline`                    | `display`         | `true`              | —     | `inline-flex`   | —
 * `column`                    | `flex-direction`  | `true`              | —     | `column`        | —
 * `row`                       | `flex-direction`  | `true`              | —     | `row`           | —
 *
 *
 * @example
 * import { flex } from 'pss'
 * import styled from 'react-emotion'
 *
 * const FlexBox = styled('div')({ display: 'flex' }, flex)
 *
 * @example
 * <FlexBox align='center' wrap> // display: flex; flex-wrap: wrap; align-items: center
 *   <div>1</div>
 *   <div>2</div>
 * </FlexBox>
 */

const flex = createPropStyles({
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  alignContent,
  inline: { display: 'inline-flex' },
  column: { flexDirection: 'column' },
  row: { flexDirection: 'row' },
  wrap: flexWrap,
  align: alignItems,
  justify: justifyContent
})

/**
 * ```js
 * import { flexItem } from 'pss'
 * ```
 *
 * [Flex item](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#Properties_applied_to_flex_items) prop styles
 *
 * ⚠️ Some of this props may not be filtered by CSS-in-JS libraries (like `order`), so you may need to provide custom prop filtering.
 *
 * prop     | css           | type                          | value | true    | false
 * :--------|:--------------|:------------------------------|:------|:------- |:--------
 * `flex`   | `flex`        | `String`, `Boolean`           | ✓     | `1 1 0` | `0 1 auto`
 * `grow`   | `flex-grow`   | `Number`, `Boolean`           | ✓     | `1`     | `0`
 * `shrink` | `flex-shrink` | `Number`, `Boolean`           | ✓     | `1`     | `0`
 * `basis`  | `flex-basis`  | `String`, `Number`, `Boolean` | ✓     | `auto`  | —
 * `order`  | `order`       | `Number`, `Boolean`           | ✓     | `1`     | `0`
 * `align`  | `align-self`  | `String`                      | ✓     | —       | —
 *
 *
 * @example
 * import { flexItem } from 'pss'
 * import styled from 'react-emotion'
 *
 * const FlexBoxItem = styled('div')(flexItem)
 *
 * @example
 * <FlexBox> // display: flex
 *   <FlexBoxItem grow>2</FlexBoxItem> // flex-grow: 1
 *   <FlexBoxItem order={-1}>1</FlexBoxItem> // order: -1
 * </FlexBox>
 */

const flexItem = createPropStyles({
  flex: ruleProp('flex', '1 1 0', '0 1 auto'),
  grow: ruleProp('flexGrow', 1, 0),
  shrink: ruleProp('flexShrink', 1, 0),
  basis: createSizeProp('flexBasis', 'auto'),
  order: ruleProp('order', 1, 0),
  align: ruleProp('alignSelf')
})

export {
  flex,
  flexItem
}
