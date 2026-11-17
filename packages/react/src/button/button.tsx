import styled from '@emotion/styled'
import { Input, InputComponent, InputProps } from '../input/input.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface ButtonProps<
  E extends string = 'button',
  V extends string = 'buttons',
>
  extends InputProps<E, V>, ButtonInnerProps {}

export interface ButtonInnerProps {}

/** @private */
export interface ButtonComponent<
  E extends string = 'button',
  V extends string = 'buttons',
> extends InputComponent<E, V, ButtonInnerProps> {}

export const Button: ButtonComponent = withDefaults(styled<any>(Input)(), {
  as: 'button',
  type: 'button',
  $key: 'buttons',
})

Button.displayName = 'Button'
