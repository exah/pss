import { createStyles } from './create-styles'
import { createRule } from './create-rule'

export const style = ({
  prop,
  getValue,
  cssProp = prop,
  rule = createRule({ cssProp, getValue })
}) => createStyles({
  [prop]: rule
})
