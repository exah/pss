import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text'

export interface LinkProps<E extends string = 'a', V extends string = 'links'>
  extends TextProps<E, V>,
    LinkInnerProps {}

export interface LinkInnerProps {}

/** @private */
export interface LinkComponent<
  E extends string = 'a',
  V extends string = 'links'
> extends TextComponent<E, V, LinkInnerProps> {}

export const Link: LinkComponent = styled<any>(Text)()

Link.displayName = 'Link'
Link.defaultProps = { as: 'a', $key: 'links' }
