import { flatten, mergeDeepRight } from 'ramda'
import { MEDIA_KEY } from '../src/constants'
import { toArr } from '../src/utils'
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
