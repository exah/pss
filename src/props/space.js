import { createPropStyles, spaceProps } from '../core'

const marginProps = createPropStyles(spaceProps('margin', 'mg'))
const paddingProps = createPropStyles(spaceProps('padding', 'pd'))

export {
  marginProps,
  paddingProps
}
