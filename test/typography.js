import expect from 'expect'
import { typography } from '../src/styles/typography'
import { textStyle } from '../src/styles/text-style'
import { toStyles } from './_helpers'

const theme = {
  default: {
    fontFamily: 'ui'
  },
  media: {
    M: '(max-width: 600px)'
  },
  fontFamily: {
    heading: 'Times New Roman, serif',
    ui: 'Helivetica, system-ui',
    responsive: {
      M: 'Times New Roman, serif'
    }
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

test('defaults', () => {
  const result = toStyles(typography({
    theme,
    fontFamily: true,
    fontSize: true,
    lineHeight: true,
    letterSpacing: true
  }))

  expect(result).toEqual({
    fontFamily: 'Helivetica, system-ui',
    fontSize: '1rem',
    lineHeight: 'normal',
    letterSpacing: 'normal'
  })
})

test('text helpers', () => {
  const result = toStyles(typography({
    theme,
    fontFamily: 'heading',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  }))

  expect(result).toEqual({
    fontFamily: 'Times New Roman, serif',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  })
})

test('text style', () => {
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

test('ellipsis', () => {
  const result = toStyles(typography({
    theme,
    ellipsis: true
  }))

  expect(result).toEqual({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })
})

test('responsive textStyle', () => {
  const result = toStyles(typography({
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

test('responsive fontFamily', () => {
  const result = toStyles(typography({
    theme,
    fontFamily: 'responsive'
  }))

  expect(result).toEqual({
    '@media (max-width: 600px)': {
      fontFamily: 'Times New Roman, serif'
    }
  })
})
