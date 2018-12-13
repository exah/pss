import test from 'ava'
import { sizes } from '../src'
import { toStyles } from './_helpers'

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
  },
  custom: {
    'my-value': '1000px'
  }
}

test('sizes relative value', (t) => {
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

  t.deepEqual(toStyles(sizes(props)), expected)
})

test('sizes path from theme', (t) => {
  const props = {
    theme,
    height: 'custom.my-value'
  }

  const expected = {
    height: '1000px'
  }

  t.deepEqual(toStyles(sizes(props)), expected)
})

test('sizes theme values', (t) => {
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

  t.deepEqual(toStyles(sizes(props)), expected)
})

test('sizes custom values', (t) => {
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

  t.deepEqual(toStyles(sizes(props)), expected)
})
