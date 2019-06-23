import { boxShadow } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  boxShadow: {
    default: '0 0 10px rgba(0, 0, 0, 0.1)'
  }
}

test('default', () => {
  const result = boxShadow({
    theme,
    boxShadow: 'auto'
  })

  expect(toStyles(result)).toEqual({
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  })
})

test('custom', () => {
  const result = boxShadow({
    theme,
    boxShadow: '0 0 100px black'
  })

  expect(toStyles(result)).toEqual({
    boxShadow: '0 0 100px black'
  })
})
