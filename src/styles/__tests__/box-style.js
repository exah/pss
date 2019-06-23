import { boxStyle } from '../..'
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

test('should apply default styles with `auto`', () => {
  const result = toStyles(boxStyle({
    theme: { default: { boxStyle: 'red' }, ...theme },
    boxStyle: 'auto'
  }))

  expect(result).toEqual({
    backgroundColor: 'red',
    color: 'white'
  })
})

test('should apply sepcified styles from theme', () => {
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

test('should contain `variant` prop', () => {
  const result = toStyles(boxStyle.variant({
    theme,
    variant: 'red'
  }))

  expect(result).toEqual({
    backgroundColor: 'red',
    color: 'white'
  })
})
