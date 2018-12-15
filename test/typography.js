import { typography } from '../src'
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
