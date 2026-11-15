import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text'

export interface LabelProps<
  E extends string = 'label',
  V extends string = 'labels'
> extends TextProps<E, V>,
    LabelInnerProps {}

export interface LabelInnerProps {}

/** @private */
export interface LabelComponent<
  E extends string = 'label',
  V extends string = 'labels'
> extends TextComponent<E, V, LabelInnerProps> {}

export const Label: LabelComponent = styled<any>(Text)()

Label.displayName = 'Label'
Label.defaultProps = { as: 'label', $key: 'labels' }
