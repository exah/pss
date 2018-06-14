import { propStylesSystem, sizeProp, ruleProp } from '../core'

const flexProps = propStylesSystem({
  inline: { display: 'inline-flex' },
  wrap: ruleProp('flexWrap', 'wrap', 'nowrap'),
  nowrap: { flexWrap: 'nowrap' },
  direction: ruleProp('flexDirection'),
  column: { flexDirection: 'column' },
  vertical: { flexDirection: 'column' }, // compat
  row: { flexDirection: 'row' },
  horizontal: { flexDirection: 'row' }, // compat
  align: ruleProp('alignItems'),
  alignItems: ruleProp('alignItems'),
  justify: ruleProp('justifyContent', 'space-between', 'normal'),
  justifyContent: ruleProp('justifyContent', 'space-between', 'normal'),
  alignContent: ruleProp('alignContent')
})

const flexItemProps = propStylesSystem({
  flex: ruleProp('flex', '1 1 0', '0 1 auto'),
  grow: ruleProp('flexGrow', 1, 0),
  shrink: ruleProp('flexShrink', 1, 0),
  basis: sizeProp('flexBasis', 'auto'),
  order: ruleProp('order', 1, 0),
  align: ruleProp('alignSelf')
})

export {
  flexProps,
  flexItemProps
}