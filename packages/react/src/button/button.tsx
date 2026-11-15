import styled from '@emotion/styled'
import { Input, InputComponent, InputProps } from '../input'

export interface ButtonProps<
  E extends string = 'button',
  V extends string = 'buttons'
> extends InputProps<E, V>,
    ButtonInnerProps {}

export interface ButtonInnerProps {}

/** @private */
export interface ButtonComponent<
  E extends string = 'button',
  V extends string = 'buttons'
> extends InputComponent<E, V, ButtonInnerProps> {}

export const Button: ButtonComponent = styled<any>(Input)()

Button.displayName = 'Button'
Button.defaultProps = { as: 'button', type: 'button', $key: 'buttons' }
