import test from 'ava'
import { position } from '../src'
import { toStyles } from './_helpers'

const theme = {
  media: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  }
}

test('position', (t) => {
  const result = position({
    theme,
    position: {
      default: 'relative',
      M: 'static'
    },
    top: true,
    bottom: false,
    left: 1 / 2,
    right: 0,
    zIndex: {
      default: 50,
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

  t.deepEqual(toStyles(result), expected)
})
