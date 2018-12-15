import expect from 'expect'
import { position } from '../src'
import { toStyles } from './_helpers'

const theme = {
  media: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  }
}

test('position', () => {
  const result = position({
    theme,
    position: {
      all: 'relative',
      M: 'static'
    },
    top: true,
    bottom: false,
    left: 1 / 2,
    right: 0,
    zIndex: {
      all: 50,
      M: 100
    }
  })

  const expected = {
    position: 'relative',
    top: 0,
    bottom: 'auto',
    left: '50%',
    right: 0,
    zIndex: 50,
    [`@media ${theme.media.M}`]: {
      position: 'static',
      zIndex: 100
    }
  }

  expect(toStyles(result)).toEqual(expected)
})
