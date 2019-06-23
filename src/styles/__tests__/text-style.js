import { textStyle } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  default: {
    textStyle: 'responsive'
  },
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

test(' apply sepcified styles from theme', () => {
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

describe('should apply default styles', () => {
  const expected = {
    fontSize: 16,
    '@media (max-width: 600px)': {
      fontSize: 12
    }
  }

  it('with `auto` defaultKeyword', () => {
    const result = toStyles(textStyle({
      theme,
      textStyle: 'auto'
    }))

    expect(result).toEqual(expected)
  })
})

test('should apply default styles with `auto`', () => {
  const result = toStyles(textStyle({
    theme: { default: { textStyle: 'responsive' }, ...theme },
    textStyle: 'auto'
  }))

  expect(result).toEqual({
    fontSize: 16,
    '@media (max-width: 600px)': {
      fontSize: 12
    }
  })
})

test('should contain `variant` prop', () => {
  const result = toStyles(textStyle.variant({
    theme,
    variant: 'heading'
  }))

  expect(result).toEqual({
    fontSize: 32,
    lineHeight: 1.1,
    fontWeight: 'bold'
  })
})
