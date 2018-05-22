import { mediaPropStyles, createSpaceProps } from '../core'

const marginProps = mediaPropStyles(createSpaceProps('margin', 'mg'), 'margin')
const paddingProps = mediaPropStyles(createSpaceProps('padding', 'pd'), 'padding')

export {
  marginProps,
  paddingProps
}
