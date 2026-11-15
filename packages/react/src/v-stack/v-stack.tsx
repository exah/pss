import styled from '@emotion/styled'
import { Stack, StackComponent, StackProps } from '../stack'

export interface VStackProps<E extends string = 'div'> extends StackProps<E> {}

/** @private */
export interface VStackComponent<E extends string = 'div'>
  extends StackComponent<E> {}

export const VStack: VStackComponent = styled<any>(Stack)({
  flexDirection: 'column',
})

VStack.displayName = 'VStack'
