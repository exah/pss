import test from 'ava'

import {
  DEFAULT_KEY,
  MEDIA_KEY,
  TEXT_STYLE_KEY,
  FONT_KEY
} from '../src/constants'

import {
  typography,
  textStyle
} from '../src'

import { toStyles } from './_helpers'

const theme = {
  [DEFAULT_KEY]: {
    [FONT_KEY]: 'ui'
  },
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
}

test('defaults', (t) => {
  const result = toStyles(typography({
    theme,
    fontFamily: true,
    fontSize: true,
    lineHeight: true,
    letterSpacing: true
  }))

  t.deepEqual(result, {
    fontFamily: 'Helivetica, system-ui',
    fontSize: '1rem',
    lineHeight: 'normal',
    letterSpacing: 'normal'
  })
})

test('text helpers', (t) => {
  const result = toStyles(typography({
    theme,
    fontFamily: 'heading',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  }))

  t.deepEqual(result, {
    fontFamily: 'Times New Roman, serif',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  })
})

test('text style', (t) => {
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
