import test from 'ava'
import { space } from '../src'
import { toStyles } from './_helpers'

const theme = {
  media: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  },
  space: [ 0, 10, 20, '3rem', 60 ]
}

test('set one step space', (t) => {
  const result = toStyles(space({ theme, mg: 1 }))

  t.deepEqual(result, {
    margin: '10px'
  })
})

test('set bool space value', (t) => {
  const result = toStyles(space({ theme, mg: true, mgx: { M: false } }))

  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': {
      marginLeft: 0,
      marginRight: 0
    }
  }

  t.deepEqual(result, expected)
})

test('override one step space on mobile and tablet', (t) => {
  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': { marginLeft: '3rem' },
    '@media (min-width: 601px) and (max-width: 1024px)': {
      marginLeft: 0,
      marginRight: 0
    }
  }

  t.deepEqual(
    toStyles(space({ theme, mg: 1, mgl: { M: 3 }, mgx: { T: 0 } })),
    expected
  )
})
