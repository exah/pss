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
    bd: true,
    bdc: true
  })

  t.deepEqual(toStyles(result), {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#eee'
  })
})

test('bdc', testValue({
  fn: border,
  prop: 'bdc',
  cssProp: 'borderColor',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ],
  falseValue: 'transparent'
}))

test('bdl custom', (t) => {
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
