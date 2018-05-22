import { mediaPropStyles, createSpaceProps } from '../prop-styles'

const marginProps = createSpaceProps('margin', 'mg')
const paddingProps = createSpaceProps('padding', 'pd')

const margin = mediaPropStyles(marginProps, 'margin')
const padding = mediaPropStyles(paddingProps, 'padding')

export {
  margin,
  padding
}
