import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text/text.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface ListProps<E extends string = 'ul', V extends string = 'lists'>
  extends TextProps<E, V>, ListInnerProps {}

export interface ListInnerProps {}

/** @private */
export interface ListComponent<
  E extends string = 'ul',
  V extends string = 'lists',
> extends TextComponent<E, V, ListInnerProps> {}

export const List: ListComponent = withDefaults(styled<any>(Text)(), {
  as: 'ul',
  $key: 'lists',
})

List.displayName = 'List'

export interface ListItemProps<
  E extends string = 'li',
  V extends string = 'listItems',
>
  extends TextProps<E, V>, ListItemInnerProps {}

export interface ListItemInnerProps {}

/** @private */
export interface ListItemComponent<
  E extends string = 'li',
  V extends string = 'listItems',
> extends TextComponent<E, V, ListItemInnerProps> {}

export const ListItem: ListItemComponent = withDefaults(
  styled<any>(Text)<ListItemInnerProps>(),
  { as: 'li', $key: 'listItems' }
)

ListItem.displayName = 'ListItem'
