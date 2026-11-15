import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'
import { Box, BoxComponent, BoxProps } from '../box'

export interface GridProps<E extends string = 'div', V extends string = 'grids'>
  extends Omit<BoxProps<E, V>, keyof GridInnerProps>,
    GridInnerProps {}

export interface GridInnerProps
  extends StyleProps<'gap'>,
    StyleProps<'rowGap'>,
    StyleProps<'columnGap'>,
    StyleProps<'gridTemplate', 'template'>,
    StyleProps<'gridTemplateColumns', 'columns'>,
    StyleProps<'placeItems'>,
    StyleProps<'placeContent'> {}

/** @private */
export interface GridComponent<
  E extends string = 'div',
  V extends string = 'grids',
  P extends {} = {}
> extends BoxComponent<E, V, GridInnerProps & P> {}

export const Grid: GridComponent = styled<any>(Box)(
  { display: 'grid' },
  style('gap'),
  style('rowGap'),
  style('columnGap'),
  style('gridTemplate', 'template'),
  style('gridTemplateColumns', 'columns'),
  style('placeItems'),
  style('placeContent')
)

Grid.displayName = 'Grid'
Grid.defaultProps = { as: 'div', $key: 'grids' }
