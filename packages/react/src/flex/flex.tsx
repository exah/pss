import styled from '@emotion/styled'
import { StyleProps, style } from 'pss'
import { Box, BoxComponent, BoxProps } from '../box/box.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface FlexProps<
  E extends string = 'div',
  V extends string = 'flexes',
>
  extends Omit<BoxProps<E, V>, keyof FlexInnerProps>, FlexInnerProps {}

export interface FlexInnerProps
  extends StyleProps<'gap'>, StyleProps<'alignItems', 'align'> {}

/** @private */
export interface FlexComponent<
  E extends string = 'div',
  V extends string = 'flexes',
  P = {},
> extends BoxComponent<E, V, FlexInnerProps & P> {}

export const Flex: FlexComponent = withDefaults(
  styled<any>(Box)(
    { display: 'flex' },
    style('gap'),
    style('alignItems', 'align')
  ),
  { as: 'div', $key: 'flexes' }
)

Flex.displayName = 'Flex'
