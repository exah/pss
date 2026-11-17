import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text/text.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface LabelProps<
  E extends string = 'label',
  V extends string = 'labels',
>
  extends TextProps<E, V>, LabelInnerProps {}

export interface LabelInnerProps {}

/** @private */
export interface LabelComponent<
  E extends string = 'label',
  V extends string = 'labels',
> extends TextComponent<E, V, LabelInnerProps> {}

export const Label: LabelComponent = withDefaults(styled<any>(Text)(), {
  as: 'label',
  $key: 'labels',
})

Label.displayName = 'Label'
