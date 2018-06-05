import { propStylesSystem, spaceProps } from '../core'

const marginProps = propStylesSystem(spaceProps('margin', 'mg'), 'margin')
const paddingProps = propStylesSystem(spaceProps('padding', 'pd'), 'padding')

export {
  marginProps,
  paddingProps
}
