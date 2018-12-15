import { createPropStyles, style } from '../src'
import { theme as helperTheme, toStyles } from './_helpers'

const theme = {
  ...helperTheme,
  customStyles: {
    default: {
      backgroundColor: '#000000',
      color: '#ffffff'
    },
    accent: {
      backgroundColor: '#ff0000',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#ffff00'
      }
    },
    caps: {
      textTransform: 'uppercase'
    },
    small: {
      all: {
        height: '30px'
      },
      M: {
        height: '20px'
      }
    }
  }
}

const customProps = createPropStyles({
  is: style({ themeKey: 'customStyles' })
})

test('default', () => {
  const result = toStyles(customProps({
    theme,
    is: true
  }))

  expect(result).toEqual(theme.customStyles.default)
})

test('other key', () => {
  const result = toStyles(customProps({
    theme,
    is: 'accent'
  }))

  expect(result).toEqual(theme.customStyles.accent)
})

test('media style', () => {
  const result = toStyles(customProps({
    theme,
    is: 'small'
  }))

  expect(result).toEqual({
    ...theme.customStyles.small.all,
    [`@media ${theme.media.M}`]: theme.customStyles.small.M
  })
})

test('media M style', () => {
  const result = toStyles(customProps({
    theme,
    is: {
      M: 'small'
    }
  }))

  expect(result).toEqual({
    [`@media ${theme.media.M}`]: theme.customStyles.small.M
  })
})
