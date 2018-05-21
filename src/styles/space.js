import { propStylesWithMedia, createSpaceProps } from '../prop-styles'

const marginProps = createSpaceProps('margin', 'mg')
const paddingProps = createSpaceProps('padding', 'pd')

const margin = propStylesWithMedia(marginProps, 'margin')
const padding = propStylesWithMedia(paddingProps, 'padding')

export {
  margin,
  padding
}
