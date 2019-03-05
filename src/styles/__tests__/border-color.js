import { borderColor } from '../..'
import { toStyles, testValue } from '../../../test-helpers'

const theme = {
  palette: {
    default: {
      border: '#eee'
    },
    inverted: {
      border: '#333'
    }
  }
}

test('borderColor', testValue({
  fn: borderColor,
  prop: 'borderColor',
  cssProp: 'borderColor',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ]
}))

test('default', () => {
  const result = borderColor({
    theme,
    borderColor: true
  })

  expect(toStyles(result)).toEqual({
    borderColor: '#eee'
  })
})

test('palette', () => {
  const result = borderColor({
    theme,
    borderColor: 'inverted'
  })

  expect(toStyles(result)).toEqual({
    borderColor: '#333'
  })
})

test('custom', () => {
  const result = borderColor({
    theme,
    borderColor: 'red'
  })

  expect(toStyles(result)).toEqual({
    borderColor: 'red'
  })
})
