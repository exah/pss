import test from 'ava'
import { border } from '../src'
import { toStyles } from './_helpers'

const theme = {
  palette: {
    default: {
      border: '#eee'
    }
  }
}

test('props: border', (t) => {
  const result = border({
    theme,
    bd: true,
    bdc: true
  })

  t.deepEqual(toStyles(result), {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#eee'
  })
})

test('props: custom border', (t) => {
  const result = border({
    theme,
    bdl: '5px dotted',
    bdc: true
  })

  t.deepEqual(toStyles(result), {
    borderLeftWidth: '5px',
    borderLeftStyle: 'dotted',
    borderColor: '#eee'
  })
})
