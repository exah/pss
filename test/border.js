import expect from 'expect'
import { border } from '../src'
import { toStyles, testValue } from './_helpers'

const theme = {
  palette: {
    default: {
      border: '#eee'
    }
  }
}

test('bd', () => {
  const result = border({
    theme,
    bd: '1px solid',
    bdc: true
  })

  expect(toStyles(result)).toEqual({
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

test('bdl custom', () => {
  const result = border({
    theme,
    bdl: '5px dotted',
    bdc: true
  })

  expect(toStyles(result)).toEqual({
    borderLeft: '5px dotted',
    borderColor: '#eee'
  })
})
