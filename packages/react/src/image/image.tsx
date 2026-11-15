import styled from '@emotion/styled'
import { Box, BoxComponent, BoxProps } from '../box'

export interface ImageProps<
  E extends string = 'img',
  V extends string = 'images'
> extends BoxProps<E, V> {}

export interface ImageInnerProps {}

/** @private */
export interface ImageComponent<
  E extends string = 'img',
  V extends string = 'images'
> extends BoxComponent<E, V, ImageInnerProps> {}

export const Image: ImageComponent = styled<any>(Box)()

Image.displayName = 'Image'
Image.defaultProps = { as: 'img', $key: 'images' }
