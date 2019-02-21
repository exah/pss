import { createStyles } from './create-styles'
import { createRule } from './create-rule'

export const style = ({
  cssProp,
  getValue,
  prop = cssProp,
  rule = createRule({ cssProp, getValue })
}) => createStyles({
  [prop]: rule
})
