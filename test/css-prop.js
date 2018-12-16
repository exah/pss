import { cssProp } from '../src'
import { toStyles } from './_helpers'

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  myColor: 'blue'
}

test('default', () => {
  const result = cssProp({
    theme,
    css: {
      backgroundColor: 'red',
      display: 'flex'
    }
  })

  expect(toStyles(result)).toEqual({
    backgroundColor: 'red',
    display: 'flex'
  })
})

test('responsive', () => {
  const result = cssProp({
    theme,
    css: {
      all: {
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

  expect(toStyles(result)).toEqual(expected)
})

test('callback', () => {
  const result = cssProp({
    theme,
    css: (props) => ({
      color: props.theme.myColor
    })
  })

  expect(toStyles(result)).toEqual({
    color: theme.myColor
  })
})
