import test from 'ava'
import { MEDIA_KEY } from '../src/constants'
import { createTheme, positionProps } from '../src'
import { toStyles } from './_helpers'

const theme = createTheme({
  [MEDIA_KEY]: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  }
})

test('props: position', (t) => {
  const result = positionProps({
    theme,
    prl: true,
    pstM: true,
    pabT: false,
    t: true,
    b: false,
    l: 1 / 2,
    x: 1,
    y: true,
    r: 0,
    z: 100,
    zM: 100
  })

  t.deepEqual(toStyles(result), {
    label: 'position',
    position: 'relative',
    top: 0,
    bottom: 'auto',
    left: '50%',
    left: '100%', // eslint-disable-line
    right: '100%',
    top: 0, // eslint-disable-line
    bottom: 0, // eslint-disable-line
    right: '0%', // eslint-disable-line
    zIndex: 100,
    '@media (max-width: 600px)': {
      position: 'static',
      zIndex: 100
    }
  })
})

test('props: z-index', (t) => {
  const zIndexFalse = positionProps({ theme, z: false })
  const zIndexTrue = positionProps({ theme, z: true })

  t.deepEqual(toStyles(zIndexFalse), {
    label: 'position',
    zIndex: 'auto'
  })

  t.deepEqual(toStyles(zIndexTrue), {
    label: 'position',
    zIndex: 1
  })
})
