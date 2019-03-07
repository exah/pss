import { textStyle } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  textStyle: {
    heading: {
      fontSize: 32,
      lineHeight: 1.1,
      fontWeight: 'bold'
    },
    responsive: {
      all: {
        fontSize: 16
      },
      M: {
        fontSize: 12
      }
    }
  }
}

test('default', () => {
  const result = toStyles(textStyle({
    theme,
    textStyle: 'heading'
  }))

  expect(result).toEqual({
    fontSize: 32,
    lineHeight: 1.1,
    fontWeight: 'bold'
  })
})

test('responsive', () => {
  const result = toStyles(textStyle({
    theme,
    textStyle: 'responsive'
  }))

  expect(result).toEqual({
    fontSize: 16,
    '@media (max-width: 600px)': {
      fontSize: 12
    }
  })
})

test('all', () => {
  const result = toStyles(textStyle({
    theme,
    textStyle: [ 'responsive', 'heading' ]
  }))

  expect(result).toEqual({
    fontSize: 32,
    lineHeight: 1.1,
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: 12
    }
  })
})

test('variant', () => {
  const result = toStyles(textStyle.variant({
    theme,
    variant: [ 'responsive', 'heading' ]
  }))

  expect(result).toEqual({
    fontSize: 32,
    lineHeight: 1.1,
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: 12
    }
  })
})
