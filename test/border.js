import test from 'ava'
import { border } from '../src'
import { toStyles, testValue } from './_helpers'

const theme = {
  palette: {
    default: {
      border: '#eee'
    }
  }
}

test('bd', (t) => {
  const result = border({
    theme,
    bd: '1px solid',
    bdc: true
  })

  t.deepEqual(toStyles(result), {
    border: '1px solid',
    borderColor: '#eee'
  })
})

test('bdc', testValue({
  fn: border,
  prop: 'bdc',
  cssProp: 'borderColor',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ]
}))

test('bdl custom', (t) => {
  const result = border({
    theme,
    bdl: '5px dotted',
    bdc: true
  })

  t.deepEqual(toStyles(result), {
    borderLeft: '5px dotted',
    borderColor: '#eee'
  })
})
