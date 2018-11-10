import test from 'ava'
import { createPropStyles, propStylesInTheme, createStyleFromTheme } from '../src'
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

const customFlags = propStylesInTheme('customStyles')
const customProps = createPropStyles({
  kind: createStyleFromTheme({ themeKey: 'customStyles' })
})

test('prop → customStyles → default', (t) => {
  const result = toStyles(customProps({
    theme,
    kind: true
  }))

  t.deepEqual(result, theme.customStyles.default)
})

test('prop → customStyles → other key', (t) => {
  const result = toStyles(customProps({
    theme,
    kind: 'accent'
  }))

  t.deepEqual(result, theme.customStyles.accent)
})

test('prop → customStyles → media style', (t) => {
  const result = toStyles(customProps({
    theme,
    kind: 'small'
  }))

  t.deepEqual(result, {
    ...theme.customStyles.small.default,
    [`@media ${theme.media.M}`]: theme.customStyles.small.M
  })
})

test('prop → customStyles → media M style', (t) => {
  const result = toStyles(customProps({
    theme,
    kindM: 'small'
  }))

  t.deepEqual(result, {
    [`@media ${theme.media.M}`]: theme.customStyles.small.M
  })
})

test('flags → customStyles', (t) => {
  const result = toStyles(customFlags({
    theme,
    accent: true,
    caps: true
  }))

  t.deepEqual(result, {
    ...theme.customStyles.accent,
    ...theme.customStyles.caps
  })
})
