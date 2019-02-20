import { typography } from '../src'
import { toStyles } from './_helpers'

const theme = {
  default: {
    font: 'ui'
  },
  media: {
    M: '(max-width: 600px)'
  },
  font: {
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
    font: true
  }))

  expect(result).toEqual({
    fontFamily: 'Helivetica, system-ui'
  })
})

test('text helpers', () => {
  const result = toStyles(typography({
    theme,
    font: 'heading',
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

test('responsive font', () => {
  const result = toStyles(typography({
    theme,
    font: 'responsive'
  }))

  expect(result).toEqual({
    '@media (max-width: 600px)': {
      fontFamily: 'Times New Roman, serif'
    }
  })
})
