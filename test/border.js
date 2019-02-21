import { border } from '../src'
import { toStyles, testValue } from './_helpers'

const theme = {
  border: {
    default: '1px solid',
    thick: '5px solid'
  },
  palette: {
    default: {
      border: '#eee'
    },
    inverted: {
      border: '#333'
    }
  }
}

test('color', testValue({
  fn: border,
  prop: 'borderColor',
  cssProp: 'borderColor',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ]
}))

test('default', () => {
  const result = border({
    theme,
    border: true,
    borderColor: true
  })

  expect(toStyles(result)).toEqual({
    border: '1px solid',
    borderColor: '#eee'
  })
})

test('theme', () => {
  const result = border({
    theme,
    borderLeft: 'thick',
    borderColor: 'inverted'
  })

  expect(toStyles(result)).toEqual({
    borderLeft: '5px solid',
    borderColor: '#333'
  })
})

test('custom', () => {
  const result = border({
    theme,
    borderLeft: '5px dotted',
    borderColor: 'red'
  })

  expect(toStyles(result)).toEqual({
    borderLeft: '5px dotted',
    borderColor: 'red'
  })
})
