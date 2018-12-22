import { direction } from '../src'
import { toStyles } from './_helpers'

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
    right: 0,
    zIndex: {
      all: 50,
      sm: 100
    }
  })

  const expected = {
    top: 0,
    bottom: 'auto',
    left: '50%',
    right: 0,
    zIndex: 50,
    [`@media ${theme.media.sm}`]: {
      zIndex: 100
    }
  }

  expect(toStyles(result)).toEqual(expected)
})
