import { createStyles, combineStyles } from '../core'
import { spaceRule } from '../.internal'
import { addPrefix } from '../utils'

export const directionStyles = ({
  cssProp,
  rule,
  alias,
  axes
}) => {
  const config = {
    l: rule(addPrefix(cssProp, 'left')),
    r: rule(addPrefix(cssProp, 'right')),
    t: rule(addPrefix(cssProp, 'top')),
    b: rule(addPrefix(cssProp, 'bottom')),
  }

  return createStyles({
    ...cssProp && { [cssProp]: rule(cssProp) },
    [addPrefix(cssProp, 'left')]: config.l,
    [addPrefix(cssProp, 'right')]: config.r,
    [addPrefix(cssProp, 'top')]: config.t,
    [addPrefix(cssProp, 'bottom')]: config.b,
    ...axes && {
      [addPrefix(cssProp, 'x')]: [ config.l, config.r ],
      [addPrefix(cssProp, 'y')]: [ config.t, config.b ],
    },
    ...alias && {
      ...cssProp && { [alias]: rule(cssProp) },
      [alias + 'l']: config.l,
      [alias + 'r']: config.r,
      [alias + 't']: config.t,
      [alias + 'b']: config.b,
      ...axes && {
        [alias + 'x']: [ config.l, config.r ],
        [alias + 'y']: [ config.t, config.b ]
      }
    }
  })
}
