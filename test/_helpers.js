import { mergeDeepRight } from 'ramda'
import { toArr, flatten } from '@exah/utils'
import { MEDIA_KEY } from '../src/constants'
import { createTheme, defaultTheme } from '../src/core/create-theme'

const theme = createTheme({
  ...defaultTheme,
  [MEDIA_KEY]: {
    M: '(max-width: 600px)'
  }
})

const toStyles = (styles) => flatten(toArr(styles)).reduce(mergeDeepRight, {})

export {
  theme,
  toStyles
}
