import { border } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  border: {
    default: '1px solid',
    thick: '5px solid'
  }
}

test('default', () => {
  const result = border({
    theme,
    border: true
  })

  expect(toStyles(result)).toEqual({
    border: '1px solid'
  })
})

test('theme', () => {
  const result = border({
    theme,
    borderLeft: 'thick'
  })

  expect(toStyles(result)).toEqual({
    borderLeft: '5px solid'
  })
})

test('custom', () => {
  const result = border({
    theme,
    borderLeft: '5px dotted'
  })

  expect(toStyles(result)).toEqual({
    borderLeft: '5px dotted'
  })
})
