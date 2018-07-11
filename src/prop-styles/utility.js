import { createPropStyles, ruleProp } from '../core'

const utilityPropStyles = createPropStyles({
  // Display
  display: ruleProp('display', 'initial', 'none'),
  order: ruleProp('order'),
  hide: { display: 'none' },
  // Floats
  float: ruleProp('float'),
  clear: ruleProp('clear', 'both', 'none'),
  cf: {
    '&::after': {
      content: '""',
      display: 'block',
      clear: 'both'
    }
  },
  // Decorations
  op: (val) => ({ opacity: (val > 1 ? (val / 100) : val) }),
  radius: ruleProp('borderRadius'),
  outline: ruleProp('outline'),
  // Overflow
  ov: ruleProp('overflow', 'auto'),
  ovx: ruleProp('overflowX', 'auto'),
  ovy: ruleProp('overflowY', 'auto'),
  ovh: { overflow: 'hidden' },
  ovsx: { overflowX: 'auto', overflowY: 'hidden' },
  ovsy: { overflowX: 'hidden', overflowY: 'auto' },
  ovtouch: { 'WebkitOverflowScrolling': 'touch' },
  // Other
  nobr: { whiteSpace: 'nowrap' },
  pe: ruleProp('pointerEvents', 'auto', 'none'),
  cursor: ruleProp('cursor'),
  filter: ruleProp('filter'),
  transform: ruleProp('transform'),
  transition: ruleProp('transition', 'all .3s', 'none'),
  willChange: ruleProp('willChange'),
  // Hacks
  _hgpu: { transform: 'translateZ(0)' },
  _hoverflow: { overflow: 'hidden' },
  _hz: { zIndex: 9999 }
})

export { utilityPropStyles }
