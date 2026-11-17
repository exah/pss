import styled from '@emotion/styled'

import { Input, InputComponent, InputProps } from '../input/input.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface TextareaProps<
  E extends string = 'textarea',
  V extends string = 'textareas',
>
  extends InputProps<E, V>, TextareaInnerProps {}

export interface TextareaInnerProps {}

/** @private */
export interface TextareaComponent<
  E extends string = 'textarea',
  V extends string = 'textareas',
> extends InputComponent<E, V, TextareaInnerProps> {}

export const Textarea: TextareaComponent = withDefaults(styled<any>(Input)(), {
  as: 'textarea',
  $key: 'textareas',
})

Textarea.displayName = 'Textarea'
