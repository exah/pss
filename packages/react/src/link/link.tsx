import styled from '@emotion/styled'
import { Text, TextComponent, TextProps } from '../text/text.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface LinkProps<E extends string = 'a', V extends string = 'links'>
  extends TextProps<E, V>, LinkInnerProps {}

export interface LinkInnerProps {}

/** @private */
export interface LinkComponent<
  E extends string = 'a',
  V extends string = 'links',
> extends TextComponent<E, V, LinkInnerProps> {}

export const Link: LinkComponent = withDefaults(styled<any>(Text)(), {
  as: 'a',
  $key: 'links',
})

Link.displayName = 'Link'
