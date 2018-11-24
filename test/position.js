import test from 'ava'
import { MEDIA_KEY } from '../src/constants'
import { positionPropStyles } from '../src'
import { toStyles } from './_helpers'

const theme = {
  [MEDIA_KEY]: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  }
}

test('props: position', (t) => {
  const result1 = positionPropStyles({
    theme,
    position: 'relative',
    positionM: 'static',
    top: true,
    bottom: false,
    left: 1 / 2,
    right: 0,
    zIndex: 50,
    zIndexM: 100
  })

  const result2 = positionPropStyles({
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

  t.deepEqual(toStyles(result1), expected)
  t.deepEqual(toStyles(result2), expected)
})

test('props: position (compat)', (t) => {
  const result = positionPropStyles({
    theme,
    prl: true,
    pstM: true,
    pabT: false,
    t: true,
    b: false,
    l: 1 / 2,
    r: 0,
    zi: 100,
    ziM: 100
  })

  t.deepEqual(toStyles(result), {
    position: 'relative',
    top: 0,
    bottom: 'auto',
    left: '50%',
    right: 0,
    zIndex: 100,
    [`@media ${theme.media.T}`]: {
      position: 'static'
    },
    [`@media ${theme.media.M}`]: {
      position: 'static',
      zIndex: 100
    }
  })
})
