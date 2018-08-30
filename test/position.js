import test from 'ava'
import { MEDIA_KEY } from '../src/constants'
import { createTheme, positionPropStyles } from '../src'
import { toStyles } from './_helpers'

const theme = createTheme({
  [MEDIA_KEY]: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  }
})

test('props: position (compat)', (t) => {
  const result = positionPropStyles({
    theme,
    position: 'relative',
    positionM: 'static',
    top: true,
    bottom: false,
    left: 1 / 2,
    right: 0,
    zIndex: 100,
    zIndexM: 100
  })

  t.deepEqual(toStyles(result), {
    position: 'relative',
    top: 0,
    bottom: 'auto',
    left: '50%',
    right: 0,
    zIndex: 100,
    '@media (max-width: 600px)': {
      position: 'static',
      zIndex: 100
    }
  })
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
    '@media (min-width: 601px) and (max-width: 1024px)': {
      position: 'static'
    },
    '@media (max-width: 600px)': {
      position: 'static',
      zIndex: 100
    }
  })
})

test('props: z-index (compat)', (t) => {
  const zIndexFalse = positionPropStyles({ theme, zi: false })
  const zIndexTrue = positionPropStyles({ theme, zi: true })

  t.deepEqual(toStyles(zIndexFalse), {
    zIndex: 'auto'
  })

  t.deepEqual(toStyles(zIndexTrue), {
    zIndex: 1
  })
})
