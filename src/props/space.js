import { propStylesSystem, spaceProps } from '../core'

const marginProps = propStylesSystem(spaceProps('margin', 'mg'))
const paddingProps = propStylesSystem(spaceProps('padding', 'pd'))

export {
  marginProps,
  paddingProps
}
