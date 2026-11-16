import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box/box.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface ScrollProps<
  E extends string = 'div',
  V extends string = 'scrolls',
>
  extends BoxProps<E, V>, ScrollInnerProps {}

export interface ScrollInnerProps {}

/** @private */
export interface ScrollComponent<
  E extends string = 'div',
  V extends string = 'scrolls',
> extends BoxComponent<E, V, ScrollInnerProps> {}

export const Scroll: ScrollComponent = withDefaults(
  styled<any>(Box)({ overflow: 'auto' }),
  { as: 'div', $key: 'scrolls' }
)

Scroll.displayName = 'Scroll'
