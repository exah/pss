import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text'

export interface InputProps<
  E extends string = 'input',
  V extends string = 'inputs'
> extends TextProps<E, V>,
    InputInnerProps {}

export interface InputInnerProps {}

/** @private */
export interface InputComponent<
  E extends string = 'input',
  V extends string = 'inputs',
  P extends {} = {}
> extends TextComponent<E, V, InputInnerProps & P> {}

export const Input: InputComponent = styled<any>(Text)()

Input.displayName = 'Input'
Input.defaultProps = { as: 'input', $key: 'inputs' }
