import styled from '@emotion/styled'
import { Input, InputComponent, InputProps } from '../input'

export interface SelectProps<
  E extends string = 'select',
  V extends string = 'selects'
> extends InputProps<E, V>,
    SelectInnerProps {}

export interface SelectInnerProps {}

/** @private */
export interface SelectComponent<
  E extends string = 'select',
  V extends string = 'selects'
> extends InputComponent<E, V> {}

export const Select: SelectComponent = styled<any>(Input)()

Select.displayName = 'Select'
Select.defaultProps = { as: 'select', $key: 'selects' }
