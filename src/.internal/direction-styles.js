import { createStyles, combineStyles } from '../core'
import { spaceRule } from '../.internal'
import { addPrefix } from '../utils'

export const directionStyles = ({
  cssProp,
  rule,
  alias
}) => {
  const config = {
    l: rule(addPrefix(cssProp, 'left')),
    r: rule(addPrefix(cssProp, 'right')),
    t: rule(addPrefix(cssProp, 'top')),
    b: rule(addPrefix(cssProp, 'bottom')),
    x: [ rule(addPrefix(cssProp, 'left')), rule(addPrefix(cssProp, 'right')) ],
    y: [ rule(addPrefix(cssProp, 'top')), rule(addPrefix(cssProp, 'bottom')) ]
  }

  return createStyles({
    ...cssProp && { [cssProp]: rule(cssProp) },
    [addPrefix(cssProp, 'left')]: config.l,
    [addPrefix(cssProp, 'right')]: config.r,
    [addPrefix(cssProp, 'top')]: config.t,
    [addPrefix(cssProp, 'bottom')]: config.b,
    [addPrefix(cssProp, 'x')]: config.x,
    [addPrefix(cssProp, 'y')]: config.y,
    ...alias && {
      ...cssProp && { [alias]: rule(cssProp) },
      [alias + 'l']: config.l,
      [alias + 'r']: config.r,
      [alias + 't']: config.t,
      [alias + 'b']: config.b,
      [alias + 'x']: config.x,
      [alias + 'y']: config.y
    }
  })
}
