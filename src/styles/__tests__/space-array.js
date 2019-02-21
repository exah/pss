import { space } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  media: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  },
  space: [ 0, 10, 20, '3rem', 60 ]
}

test('set one step space', () => {
  const result = toStyles(space({ theme, mg: 1 }))

  expect(result).toEqual({
    margin: '10px'
  })
})

test('set bool space value', () => {
  const result = toStyles(space({ theme, mg: true, mgx: { M: false } }))

  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': {
      marginLeft: 0,
      marginRight: 0
    }
  }

  expect(result).toEqual(expected)
})

test('override one step space on mobile and tablet', () => {
  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': { marginLeft: '3rem' },
    '@media (min-width: 601px) and (max-width: 1024px)': {
      marginLeft: 0,
      marginRight: 0
    }
  }

  expect(toStyles(space({ theme, mg: 1, mgl: { M: 3 }, mgx: { T: 0 } }))).toEqual(expected)
})
