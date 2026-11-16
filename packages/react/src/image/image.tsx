import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box/box.js'
import { withDefaults } from '../internal/with-defaults.js'

export interface ImageProps<
  E extends string = 'img',
  V extends string = 'images',
> extends BoxProps<E, V> {}

export interface ImageInnerProps {}

/** @private */
export interface ImageComponent<
  E extends string = 'img',
  V extends string = 'images',
> extends BoxComponent<E, V, ImageInnerProps> {}

export const Image: ImageComponent = withDefaults(styled<any>(Box)(), {
  as: 'img',
  $key: 'images',
})

Image.displayName = 'Image'
