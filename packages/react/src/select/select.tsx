import styled from '@emotion/styled'
import { Input, InputComponent, InputProps } from '../input/input.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface SelectProps<
  E extends string = 'select',
  V extends string = 'selects',
>
  extends InputProps<E, V>, SelectInnerProps {}

export interface SelectInnerProps {}

/** @private */
export interface SelectComponent<
  E extends string = 'select',
  V extends string = 'selects',
> extends InputComponent<E, V> {}

export const Select: SelectComponent = withDefaults(styled<any>(Input)(), {
  as: 'select',
  $key: 'selects',
})

Select.displayName = 'Select'
