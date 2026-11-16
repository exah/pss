import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'
import { Box, BoxComponent, BoxProps } from '../box/box.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface StackProps<E extends string = 'div'>
  extends Omit<BoxProps<E, 'stacks'>, keyof StackInnerProps>, StackInnerProps {}

export interface StackInnerProps
  extends StyleProps<'gap', 'space'>, StyleProps<'alignItems', 'align'> {}

/** @private */
export interface StackComponent<E extends string = 'div'> extends BoxComponent<
  E,
  'stacks',
  StackInnerProps
> {}

/** @private Use `VStack` or `HStack` */
export const Stack: StackComponent = withDefaults(
  styled<any>(Box)(
    { display: 'flex' },
    style('gap', 'space'),
    style('alignItems', 'align')
  ),
  { as: 'div', $key: 'stacks' }
)

Stack.displayName = 'Stack'
