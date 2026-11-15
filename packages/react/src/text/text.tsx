import styled from '@emotion/styled'
import { style, StyleProps } from 'pss'

import { Box, BoxComponent, BoxProps } from '../box'

export interface TextProps<
  E extends string = 'span',
  V extends string = 'texts'
> extends Omit<BoxProps<E, V>, keyof TextInnerProps>,
    TextInnerProps {}

export interface TextInnerProps
  extends StyleProps<'fontFamily'>,
    StyleProps<'fontSize'>,
    StyleProps<'fontWeight'>,
    StyleProps<'letterSpacing'>,
    StyleProps<'lineHeight'>,
    StyleProps<'textAlign'>,
    StyleProps<'textDecoration'>,
    StyleProps<'textOverflow'>,
    StyleProps<'textTransform'>,
    StyleProps<'whiteSpace'> {}

/** @private */
export interface TextComponent<
  E extends string = 'span',
  V extends string = 'texts',
  P extends {} = {}
> extends BoxComponent<E, V, TextInnerProps & P> {}

export const Text: TextComponent = styled<any>(Box)(
  style('fontFamily'),
  style('fontSize'),
  style('fontWeight'),
  style('letterSpacing'),
  style('lineHeight'),
  style('textAlign'),
  style('textDecoration'),
  style('textOverflow'),
  style('textTransform'),
  style('whiteSpace')
)

Text.displayName = 'Text'
Text.defaultProps = { as: 'span', $key: 'texts' }
