import { mediaPropStyles, spaceProps } from '../core'

const marginProps = mediaPropStyles(spaceProps('margin', 'mg'), 'margin')
const paddingProps = mediaPropStyles(spaceProps('padding', 'pd'), 'padding')

export {
  marginProps,
  paddingProps
}
