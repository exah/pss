import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text'

export interface ListProps<E extends string = 'ul', V extends string = 'lists'>
  extends TextProps<E, V>,
    ListInnerProps {}

export interface ListInnerProps {}

/** @private */
export interface ListComponent<
  E extends string = 'ul',
  V extends string = 'lists'
> extends TextComponent<E, V, ListInnerProps> {}

export const List: ListComponent = styled<any>(Text)()

List.displayName = 'List'
List.defaultProps = { as: 'ul', $key: 'lists' }

export interface ListItemProps<
  E extends string = 'li',
  V extends string = 'listItems'
> extends TextProps<E, V>,
    ListItemInnerProps {}

export interface ListItemInnerProps {}

/** @private */
export interface ListItemComponent<
  E extends string = 'li',
  V extends string = 'listItems'
> extends TextComponent<E, V, ListItemInnerProps> {}

export const ListItem: ListItemComponent =
  styled<any>(Text)<ListItemInnerProps>()

ListItem.displayName = 'ListItem'
ListItem.defaultProps = { as: 'li', $key: 'listItems' }
