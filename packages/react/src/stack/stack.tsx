import styled from '@emotion/styled'
import { StyleProps } from 'pss'
import { Flex, FlexComponent, FlexProps } from '../flex/flex.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface StackProps<E extends string = 'div'>
  extends
    Omit<FlexProps<E, 'stacks'>, keyof StackInnerProps>,
    StackInnerProps {}

export interface StackInnerProps
  extends StyleProps<'gap', 'space'>, StyleProps<'alignItems', 'align'> {}

/** @private */
export interface StackComponent<E extends string = 'div'> extends FlexComponent<
  E,
  'stacks',
  StackInnerProps
> {}

/** @private Use `VStack` or `HStack` */
export const Stack: StackComponent = withDefaults(styled<any>(Flex)(), {
  as: 'div',
  $key: 'stacks',
})

Stack.displayName = 'Stack'
