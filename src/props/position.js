import { propStylesSystem, ruleProp, sizeProp } from '../core'

const direction = (dir) => sizeProp(dir, 0, 'auto')

const positionProps = propStylesSystem({
  pst: { position: 'static' },
  prl: { position: 'relative' },
  pab: { position: 'absolute' },
  pfx: { position: 'fixed' },
  psy: { position: 'sticky' },
  l: direction('left'),
  r: direction('right'),
  t: direction('top'),
  b: direction('bottom'),
  x: [ direction('left'), direction('right') ],
  y: [ direction('top'), direction('bottom') ],
  z: ruleProp('zIndex', 1, 'auto')
})

export { positionProps }
