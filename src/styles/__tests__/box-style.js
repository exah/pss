import { boxStyle, cs } from '../..'
import { toStyles } from '../../../test-helpers'

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

test('default', () => {
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

test('red, shadow', () => {
  const result = toStyles(boxStyle({
    theme,
    boxStyle: cs('red', 'shadow')
  }))

  expect(result).toEqual({
    backgroundColor: 'red',
    color: 'white',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, .3)'
  })
})

test('variant', () => {
  const result = toStyles(boxStyle.variant({
    theme,
    variant: cs('red', 'shadow')
  }))

  expect(result).toEqual({
    backgroundColor: 'red',
    color: 'white',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, .3)'
  })
})
