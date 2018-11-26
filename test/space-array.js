import test from 'ava'
import { MEDIA_KEY, SPACE_KEY } from '../src/constants'

import {
  createPropStyles,
  createSpace
} from '../src'

import { toStyles } from './_helpers'

const theme = {
  [MEDIA_KEY]: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  },
  [SPACE_KEY]: [ 0, 10, 20, '3rem', 60 ]
}

const marginPropStyles = createPropStyles(createSpace('margin', 'mg'))

test('props -> set one step space', (t) => {
  const result = toStyles(marginPropStyles({ theme, mg: 1 }))

  t.deepEqual(result, {
    margin: '10px'
  })
})

test('props -> set bool space value', (t) => {
  const result1 = toStyles(marginPropStyles({ theme, mg: true, mgxM: false }))
  const result2 = toStyles(marginPropStyles({ theme, mg: true, mgx: { M: false } }))

  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': {
      marginLeft: 0,
      marginRight: 0
    }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('props -> override one step space on mobile and tablet', (t) => {
  const result1 = toStyles(marginPropStyles({ theme, mg: 1, mglM: 3, mgxT: 0 }))
  const result2 = toStyles(marginPropStyles({ theme, mg: 1, mgl: { M: 3 }, mgx: { T: 0 } }))

  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': { marginLeft: '3rem' },
    '@media (min-width: 601px) and (max-width: 1024px)': {
      marginLeft: 0,
      marginRight: 0
    }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})
