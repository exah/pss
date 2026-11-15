import styled from '@emotion/styled'

import { Input, InputComponent, InputProps } from '../input'

export interface TextareaProps<
  E extends string = 'textarea',
  V extends string = 'textareas'
> extends InputProps<E, V>,
    TextareaInnerProps {}

export interface TextareaInnerProps {}

/** @private */
export interface TextareaComponent<
  E extends string = 'textarea',
  V extends string = 'textareas'
> extends InputComponent<E, V, TextareaInnerProps> {}

export const Textarea: TextareaComponent = styled<any>(Input)()

Textarea.displayName = 'Textarea'
Textarea.defaultProps = { as: 'textarea', $key: 'textareas' }
