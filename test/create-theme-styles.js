import test from 'ava'
import { createPropStyles, themeValue } from '../src'
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
      default: {
        height: '30px'
      },
      M: {
        height: '20px'
      }
    }
  }
}

const customProps = createPropStyles({
  is: themeValue({ themeKey: 'customStyles' })
})

test('default', (t) => {
  const result = toStyles(customProps({
    theme,
    is: true
  }))

  t.deepEqual(result, theme.customStyles.default)
})

test('other key', (t) => {
  const result = toStyles(customProps({
    theme,
    is: 'accent'
  }))

  t.deepEqual(result, theme.customStyles.accent)
})

test('media style', (t) => {
  const result = toStyles(customProps({
    theme,
    is: 'small'
  }))

  t.deepEqual(result, {
    ...theme.customStyles.small.default,
    [`@media ${theme.media.M}`]: theme.customStyles.small.M
  })
})

test('media M style', (t) => {
  const result1 = toStyles(customProps({
    theme,
    isM: 'small'
  }))

  const result2 = toStyles(customProps({
    theme,
    is: {
      M: 'small'
    }
  }))

  const expected = {
    [`@media ${theme.media.M}`]: theme.customStyles.small.M
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})
