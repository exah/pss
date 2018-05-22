import { mediaPropStyles, createRuleProp, createSizeProp } from '../core'

const direction = (dir) => createSizeProp(dir, 0, 'auto')

const positionProps = mediaPropStyles({
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
  z: createRuleProp('zIndex', 1, 'auto')
}, 'position')

export { positionProps }
