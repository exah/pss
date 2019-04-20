import { borders } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  border: {
    default: '1px solid',
    thick: '5px solid'
  }
}

test('default', () => {
  const result = borders({
    theme,
    border: 'auto'
  })

  expect(toStyles(result)).toEqual({
    border: '1px solid'
  })
})

test('theme', () => {
  const result = borders({
    theme,
    borderLeft: 'thick'
  })

  expect(toStyles(result)).toEqual({
    borderLeft: '5px solid'
  })
})

test('custom', () => {
  const result = borders({
    theme,
    borderLeft: '5px dotted'
  })

  expect(toStyles(result)).toEqual({
    borderLeft: '5px dotted'
  })
})
