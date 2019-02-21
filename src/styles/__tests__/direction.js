import { direction } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  media: {
    sm: '(max-width: 600px)'
  }
}

test('direction', () => {
  const result = direction({
    theme,
    top: true,
    bottom: false,
    left: 1 / 2,
    right: 0
  })

  const expected = {
    top: 0,
    bottom: 'auto',
    left: '50%',
    right: 0
  }

  expect(toStyles(result)).toEqual(expected)
})
