import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'
import { Box, BoxComponent, BoxProps } from '../box'

export interface ZStackProps<
  E extends string = 'div',
  V extends string = 'zStacks'
> extends Omit<BoxProps<E, V>, keyof ZStackInnerProps>,
    ZStackInnerProps {}

/** @private */
export interface ZStackInnerProps extends StyleProps<'placeItems', 'align'> {}

/** @private */
export interface ZStackComponent<
  E extends string = 'div',
  V extends string = 'zStacks'
> extends BoxComponent<E, V, ZStackInnerProps> {}

export const ZStack: ZStackComponent = styled<any>(Box)(
  { display: 'grid' },
  { gridTemplateAreas: '"z-stack-item"', '> *': { gridArea: 'z-stack-item' } },
  style('placeItems', 'align')
)

ZStack.displayName = 'ZStack'
ZStack.defaultProps = { as: 'div', $key: 'zStacks' }
