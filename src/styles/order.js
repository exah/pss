import { createStyles, rule } from '../core'
import { boolValue } from '../values'

export const order = createStyles({
  order: rule('order', boolValue(1, 0)) // COMPAT: Remove boolValue
})
