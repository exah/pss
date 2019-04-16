import { space } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  media: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  },
  space: {
    all: [ 0, 10, 20, '3rem', 60 ],
    M: [ 0, 5, 10, '2rem', 20 ]
  },
  size: {
    nudge: {
      all: 2,
      M: 1
    },
    xl: 100
  }
}

test('set one step space for every media', () => {
  expect(toStyles(space({ theme, mg: 1 }))).toEqual({
    margin: '10px',
    '@media (max-width: 600px)': { margin: '5px' }
  })
})

test('set one step space on desktop and 2 on mobile', () => {
  expect(toStyles(space({ theme, mg: { all: 1, M: 3 } }))).toEqual({
    margin: '10px',
    '@media (max-width: 600px)': { margin: '2rem' }
  })
})

test('override one step space on mobile and tablet', () => {
  expect(toStyles(space({ theme, mg: 1, mgl: { M: 3 }, mgx: { T: 0 } }))).toEqual({
    margin: '10px',
    '@media (max-width: 600px)': { margin: '5px', marginLeft: '2rem' },
    '@media (min-width: 601px) and (max-width: 1024px)': {
      marginLeft: 0,
      marginRight: 0
    }
  })
})

test('set margin to sizes responsive "nudge" value', () => {
  const result = toStyles(space({ theme, mg: 'nudge' }))

  expect(result).toEqual({
    margin: '2px',
    '@media (max-width: 600px)': { margin: '1px' }
  })
})

test('set margin to sizes "xl" value', () => {
  expect(toStyles(space({ theme, mg: 'xl' }))).toEqual({
    margin: '100px'
  })
})

test('set margin to "auto"', () => {
  expect(toStyles(space({ theme, mg: 'auto' }))).toEqual({
    margin: 'auto'
  })
})

test('set margin to "30px" on mobile', () => {
  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': { margin: '30px' }
  }

  expect(toStyles(space({ theme, mg: { all: '10px', M: '30px' } }))).toEqual(expected)
})

test('without theme should use default scale', () => {
  expect(toStyles(space({ mg: 1 }))).toEqual({ margin: '4px' })
  expect(toStyles(space({ mg: 0 }))).toEqual({ margin: 0 })
})

describe('selectors', () => {
  test('add margin-top to &:first-child', () => {
    const result = toStyles(space({
      theme,
      mgt: { '&:first-child': 1 }
    }))

    expect(result).toEqual({
      '&:first-child': {
        marginTop: '10px',
        '@media (max-width: 600px)': {
          marginTop: '5px'
        }
      }
    })
  })

  describe('add margin to & + & element on mobile', () => {
    test('selector nested in media', () => {
      const result = toStyles(space({
        theme,
        mg: { M: { '& + &': 2 } }
      }))

      expect(result).toEqual({
        '@media (max-width: 600px)': {
          '& + &': {
            margin: '10px'
          }
        }
      })
    })

    test('media nested in selector', () => {
      const result = toStyles(space({
        theme,
        mg: { '& + &': { M: 2 } }
      }))

      expect(result).toEqual({
        '@media (max-width: 600px)': {
          '& + &': {
            margin: '10px'
          }
        }
      })
    })

    test('with other media', () => {
      const result = toStyles(space({
        theme,
        mg: { '& + &': { M: 2 }, all: 3 }
      }))

      expect(result).toEqual({
        margin: '3rem',
        '@media (max-width: 600px)': {
          '& + &': {
            margin: '10px'
          }
        }
      })
    })
  })
})
