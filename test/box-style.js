import { boxStyle } from '../src/styles'
import { toStyles } from './_helpers'

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  boxStyle: {
    red: {
      backgroundColor: 'red',
      color: 'white'
    },
    shadow: {
      boxShadow: '0 0 20px 0 rgba(0, 0, 0, .3)'
    }
  }
}

test('boxStyle', () => {
  expect(toStyles(boxStyle({
    theme,
    boxStyle: 'red'
  }))).toEqual({
    backgroundColor: 'red',
    color: 'white'
  })

  expect(toStyles(boxStyle({
    theme,
    boxStyle: 'shadow'
  }))).toEqual({
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, .3)'
  })
})

test('boxStyle all', () => {
  const result = toStyles(boxStyle({
    theme,
    boxStyle: [ 'red', 'shadow' ]
  }))

  expect(result).toEqual({
    backgroundColor: 'red',
    color: 'white',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, .3)'
  })
})
