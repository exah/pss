import { border } from '../src'
import { toStyles, testValue } from './_helpers'

const theme = {
  palette: {
    default: {
      border: '#eee'
    }
  }
}

test('border', () => {
  const result = border({
    theme,
    border: '1px solid',
    borderColor: true
  })

  expect(toStyles(result)).toEqual({
    border: '1px solid',
    borderColor: '#eee'
  })
})

test('borderColor', testValue({
  fn: border,
  prop: 'borderColor',
  cssProp: 'borderColor',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ]
}))

test('bdl custom', () => {
  const result = border({
    theme,
    borderLeft: '5px dotted',
    borderColor: true
  })

  expect(toStyles(result)).toEqual({
    borderLeft: '5px dotted',
    borderColor: '#eee'
  })
})
