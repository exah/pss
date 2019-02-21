import { fontVariant } from '../..'
import { toStyles } from '../../../test-helpers'

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
  const result = toStyles(fontVariant({
    theme,
    font: true
  }))

  expect(result).toEqual({
    fontFamily: 'Helivetica, system-ui'
  })
})

test('key', () => {
  const result = toStyles(fontVariant({
    theme,
    font: 'heading'
  }))

  expect(result).toEqual({
    fontFamily: 'Times New Roman, serif'
  })
})

test('responsive', () => {
  const result = toStyles(fontVariant({
    theme,
    font: 'responsive'
  }))

  expect(result).toEqual({
    '@media (max-width: 600px)': {
      fontFamily: 'Times New Roman, serif'
    }
  })
})
