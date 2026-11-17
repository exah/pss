import { pss } from 'pss'
import { Base, Box, Provider } from 'pss-react'

if (typeof pss !== 'function') throw new Error('pss ESM export did not resolve')
if (!Base || !Box || !Provider)
  throw new Error('pss-react ESM exports did not resolve')

const styles = pss({
  theme: { colors: { primary: 'blue' } },
  pss: { color: 'primary' },
})

if (!Array.isArray(styles)) throw new Error('pss did not return style values')
