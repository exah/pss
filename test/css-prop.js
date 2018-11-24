import test from 'ava'
import { MEDIA_KEY } from '../src/constants'
import { cssProp } from '../src'
import { toStyles } from './_helpers'

const theme = {
  [MEDIA_KEY]: {
    M: '(max-width: 600px)'
  },
  myColor: 'blue'
}

test('props: css', (t) => {
  const result = cssProp({
    theme,
    css: {
      backgroundColor: 'red',
      display: 'flex'
    }
  })

  t.deepEqual(toStyles(result), {
    backgroundColor: 'red',
    display: 'flex'
  })
})

test('props: css (responsive)', (t) => {
  const result1 = cssProp({
    theme,
    css: {
      backgroundColor: 'blue'
    },
    cssM: {
      backgroundColor: 'red',
      display: 'flex'
    }
  })

  const result2 = cssProp({
    theme,
    css: {
      default: {
        backgroundColor: 'blue'
      },
      M: {
        backgroundColor: 'red',
        display: 'flex'
      }
    }
  })

  const expected = {
    backgroundColor: 'blue',
    '@media (max-width: 600px)': {
      backgroundColor: 'red',
      display: 'flex'
    }
  }

  t.deepEqual(toStyles(result1), expected)
  t.deepEqual(toStyles(result2), expected)
})

test('props: css (callback)', (t) => {
  const result = cssProp({
    theme,
    css: (props) => ({
      color: props.theme.myColor
    })
  })

  t.deepEqual(toStyles(result), {
    color: theme.myColor
  })
})
