import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box'

export interface FlexProps<
  E extends string = 'div',
  V extends string = 'flexes'
> extends Omit<BoxProps<E, V>, keyof FlexInnerProps>,
    FlexInnerProps {}

export interface FlexInnerProps {}

/** @private */
export interface FlexComponent<
  E extends string = 'div',
  V extends string = 'flexes',
  P = {}
> extends BoxComponent<E, V, FlexInnerProps & P> {}

export const Flex: FlexComponent = styled<any>(Box)({
  display: 'flex',
})

Flex.displayName = 'Flex'
Flex.defaultProps = { as: 'div', $key: 'flexes' }
