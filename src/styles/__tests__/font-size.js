import { fontSize } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  default: {
    fontSize: 'root'
  },
  media: {
    M: '(max-width: 600px)'
  },
  fontSize: {
    root: 16,
    heading: 22,
    caption: {
      all: 12,
      M: 14
    }
  }
}

test('defaults', () => {
  const result = toStyles(fontSize({
    theme,
    fontSize: true
  }))

  expect(result).toEqual({
    fontSize: '16px'
  })
})

test('key', () => {
  const result = toStyles(fontSize({
    theme,
    fontSize: 'heading'
  }))

  expect(result).toEqual({
    fontSize: '22px'
  })
})

test('responsive', () => {
  const result = toStyles(fontSize({
    theme,
    fontSize: 'caption'
  }))

  expect(result).toEqual({
    fontSize: '12px',
    '@media (max-width: 600px)': {
      fontSize: '14px'
    }
  })
})
