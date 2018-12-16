import { textStyle } from '../src/styles'
import { toStyles } from './_helpers'

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

test('textStyle', () => {
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

test('textStyle responsive', () => {
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

test('textStyle all', () => {
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
