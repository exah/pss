import { fontFamily } from '../..'
import { toStyles } from '../../../test-helpers'

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
  const result = toStyles(fontFamily({
    theme,
    fontFamily: 'auto'
  }))

  expect(result).toEqual({
    fontFamily: 'Helivetica, system-ui'
  })
})

test('key', () => {
  const result = toStyles(fontFamily({
    theme,
    fontFamily: 'heading'
  }))

  expect(result).toEqual({
    fontFamily: 'Times New Roman, serif'
  })
})

test('responsive', () => {
  const result = toStyles(fontFamily({
    theme,
    fontFamily: 'responsive'
  }))

  expect(result).toEqual({
    '@media (max-width: 600px)': {
      fontFamily: 'Times New Roman, serif'
    }
  })
})
