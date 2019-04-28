import { createStyles, combineStyles } from '../core'
import { spaceRule } from '../.internal'
import { addPrefix } from '../utils'

export const directionStyles = ({
  cssProp,
  rule
}) => createStyles({
  ...cssProp && { [cssProp]: rule(cssProp) },
  [addPrefix(cssProp, 'left')]: rule(addPrefix(cssProp, 'left')),
  [addPrefix(cssProp, 'right')]: rule(addPrefix(cssProp, 'right')),
  [addPrefix(cssProp, 'top')]: rule(addPrefix(cssProp, 'top')),
  [addPrefix(cssProp, 'bottom')]: rule(addPrefix(cssProp, 'bottom'))
})

export const directionAliasStyles = ({
  prop,
  cssProp,
  rule
}) => createStyles({
  ...cssProp && { [prop]: rule(cssProp) },
  [prop + 'l']: rule(addPrefix(cssProp, 'left')),
  [prop + 'r']: rule(addPrefix(cssProp, 'right')),
  [prop + 't']: rule(addPrefix(cssProp, 'top')),
  [prop + 'b']: rule(addPrefix(cssProp, 'bottom')),
  [prop + 'x']: [ rule(addPrefix(cssProp, 'left')), rule(addPrefix(cssProp, 'right')) ],
  [prop + 'y']: [ rule(addPrefix(cssProp, 'top')), rule(addPrefix(cssProp, 'bottom')) ]
})
