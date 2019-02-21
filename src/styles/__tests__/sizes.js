import { sizes } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  media: {
    D: '(min-width: 1025px)',
    M: '(max-width: 600px)'
  },
  size: {
    nudge: {
      all: 2,
      M: 1
    },
    xl: 100
  }
}

test('sizes relative value', () => {
  const props = {
    theme,
    height: true,
    width: 1,
    minWidth: 0,
    maxWidth: false,
    minHeight: (3 / 4),
    maxHeight: 'auto'
  }

  const expected = {
    height: '100%',
    width: '100%',
    minWidth: 0,
    maxWidth: 0,
    minHeight: '75%',
    maxHeight: 'auto'
  }

  expect(toStyles(sizes(props))).toEqual(expected)
})

test('sizes theme values', () => {
  const props = {
    theme,
    minWidth: 'nudge',
    maxWidth: {
      M: 'xl'
    }
  }

  const expected = {
    minWidth: '2px',
    '@media (max-width: 600px)': {
      minWidth: '1px',
      maxWidth: '100px'
    }
  }

  expect(toStyles(sizes(props))).toEqual(expected)
})

test('sizes custom values', () => {
  const props = {
    theme,
    height: '100px',
    width: {
      M: '20px'
    },
    minHeight: {
      M: '300px'
    }
  }

  const expected = {
    height: '100px',
    '@media (max-width: 600px)': {
      width: '20px',
      minHeight: '300px'
    }
  }

  expect(toStyles(sizes(props))).toEqual(expected)
})