import { propStylesSystem, ruleProp } from '../core'

const textProps = propStylesSystem({
  font: ruleProp('fontFamily'),
  size: ruleProp('fontSize'),
  weight: ruleProp('fontWeight'),
  bold: ruleProp('fontWeight', 'bold', 'normal'),
  line: ruleProp('lineHeight', 'normal'),
  transform: ruleProp('textTransform'),
  decoration: ruleProp('textDecoration'),
  align: ruleProp('textAlign'),
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  justify: { textAlign: 'justify' },
  italic: { fontStyle: 'italic' },
  oblique: { fontStyle: 'oblique' },
  hyphens: ruleProp('hyphens', 'auto'),
  whiteSpace: ruleProp('whiteSpace'),
  nowrap: { whiteSpace: 'nowrap' },
  breakWord: { wordBreak: 'break-all' },
  underline: (val) => ({ borderBottom: `1px ${val === true ? 'solid' : val}` }),
  capitalize: ruleProp('textTransform', 'capitalize', 'none'),
  lowercase: ruleProp('textTransform', 'lowercase', 'none'),
  uppercase: ruleProp('textTransform', 'uppercase', 'none'),
  ellipsis: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
})

export { textProps }
