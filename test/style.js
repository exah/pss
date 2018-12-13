import test from 'ava'
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
    ...theme.customStyles.small.all,
    [`@media ${theme.media.M}`]: theme.customStyles.small.M
  })
})

test('media M style', (t) => {
  const result = toStyles(customProps({
    theme,
    is: {
      M: 'small'
    }
  }))

  t.deepEqual(result, {
    [`@media ${theme.media.M}`]: theme.customStyles.small.M
  })
})
