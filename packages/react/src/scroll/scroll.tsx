import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box'

export interface ScrollProps<
  E extends string = 'div',
  V extends string = 'scrolls'
> extends BoxProps<E, V>,
    ScrollInnerProps {}

export interface ScrollInnerProps {}

/** @private */
export interface ScrollComponent<
  E extends string = 'div',
  V extends string = 'scrolls'
> extends BoxComponent<E, V, ScrollInnerProps> {}

export const Scroll: ScrollComponent = styled<any>(Box)({
  overflow: 'auto',
})

Scroll.displayName = 'Scroll'
Scroll.defaultProps = { as: 'div', $key: 'scrolls' }
