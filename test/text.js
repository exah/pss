import test from 'ava'

import {
  MEDIA_KEY,
  TEXT_STYLE_KEY,
  FONT_KEY
} from '../src/constants'

import {
  createTheme,
  text,
  textStyle
} from '../src'

import { toStyles } from './_helpers'

const theme = createTheme({
  [MEDIA_KEY]: {
    D: '(min-width: 1025px)',
    M: '(max-width: 600px)'
  },
  [FONT_KEY]: {
    heading: 'Times New Roman, serif',
    ui: 'Helivetica, system-ui'
  },
  [TEXT_STYLE_KEY]: {
    heading: {
      fontSize: 32,
      lineHeight: 1.1,
      fontWeight: 'bold'
    }
  }
})

test('props -> set font family', (t) => {
  const result = toStyles(text({
    theme,
    font: 'heading',
    weight: 'bold'
  }))

  t.deepEqual(result, {
    fontFamily: 'Times New Roman, serif',
    fontWeight: 'bold'
  })
})

test('props -> set text style', (t) => {
  const result = toStyles(textStyle({
    theme,
    textStyle: 'heading'
  }))

  t.deepEqual(result, {
    fontSize: 32,
    lineHeight: 1.1,
    fontWeight: 'bold'
  })
})
