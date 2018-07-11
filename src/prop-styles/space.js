import { createPropStyles, createSpaceProps } from '../core'
import { combine } from '../utils'

const marginPropStyles = createPropStyles(createSpaceProps('margin', 'mg'))
const paddingPropStyles = createPropStyles(createSpaceProps('padding', 'pd'))
const spacePropStyles = combine(marginPropStyles, paddingPropStyles)

export {
  marginPropStyles,
  paddingPropStyles,
  spacePropStyles
}
