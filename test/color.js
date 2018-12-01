import test from 'ava'
import { mergeDeepRight } from 'ramda'

import {
  DEFAULT_KEY,
  MEDIA_KEY,
  COLORS_KEY,
  PALETTE_KEY
} from '../src/constants'

import {
  createPropStyles,
  createPaletteStyle,
  createColor,
  colorValue,
  experimentalCreateRule,
  colors as exportedColors
} from '../src'

import { toStyles, testValue } from './_helpers'

const COLOR_WHITE = '#ffffff'
const COLOR_BLACK = '#000000'
const COLOR_YELLOW = '#fff000'

const theme = {
  [MEDIA_KEY]: {
    M: '(max-width: 600px)'
  },
  [COLORS_KEY]: {
    yellow: COLOR_YELLOW,
    white: COLOR_WHITE,
    black: COLOR_BLACK
  },
  [PALETTE_KEY]: {
    [DEFAULT_KEY]: {
      fg: COLOR_BLACK,
      bg: COLOR_WHITE,
      primary: COLOR_BLACK,
      accent: COLOR_YELLOW
    },
    inverted: {
      fg: COLOR_WHITE,
      bg: COLOR_BLACK,
      primary: COLOR_WHITE,
      accent: COLOR_YELLOW
    }
  }
}

const themeInvertedDefault = mergeDeepRight(theme, {
  [DEFAULT_KEY]: { [PALETTE_KEY]: 'inverted' }
})

const customColors = createPropStyles({
  tm: createPaletteStyle('bg', 'fg'),
  fg: createColor('color', 'fg'),
  bg: createColor('backgroundColor', 'bg'),
  bc: experimentalCreateRule('borderColor', colorValue('border'))
})

test('fg', testValue({
  theme,
  fn: exportedColors,
  prop: 'fg',
  cssProp: 'color',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ],
  trueValue: COLOR_BLACK,
  falseValue: 'inherit'
}))

test('bg', testValue({
  theme,
  fn: exportedColors,
  prop: 'bg',
  cssProp: 'backgroundColor',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ],
  trueValue: COLOR_WHITE,
  falseValue: 'transparent'
}))

test('set theme colors and override text color on mobile', (t) => {
  const props = {
    theme,
    tm: true,
    fgM: 'accent'
  }

  const expected = {
    color: COLOR_BLACK,
    backgroundColor: COLOR_WHITE,
    '@media (max-width: 600px)': {
      color: COLOR_YELLOW
    }
  }

  const result1 = toStyles(customColors(props))
  const result2 = toStyles(exportedColors(props))

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('change default theme to "inverted"', (t) => {
  const props = {
    theme: themeInvertedDefault,
    tm: true
  }

  const expected = {
    color: COLOR_WHITE,
    backgroundColor: COLOR_BLACK
  }

  const result1 = toStyles(customColors(props))
  const result2 = toStyles(exportedColors(props))

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('reset theme colors on mobile', (t) => {
  const props = {
    theme: themeInvertedDefault,
    tm: true,
    tmM: false
  }

  const expected = {
    color: COLOR_WHITE,
    backgroundColor: COLOR_BLACK,
    '@media (max-width: 600px)': {
      color: 'inherit',
      backgroundColor: 'transparent'
    }
  }

  const result1 = toStyles(customColors(props))
  const result2 = toStyles(exportedColors(props))

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('set custom  colors', (t) => {
  const customColor = 'rgba(255, 0, 255, 0.3)'
  const props = { theme, fg: customColor, bg: 'custom-color' }
  const expected = { color: customColor, backgroundColor: 'custom-color' }

  const resultCustom = toStyles(customColors(props))
  const resultExported = toStyles(exportedColors(props))

  t.deepEqual(resultCustom, expected)
  t.deepEqual(resultExported, expected)
})

test('use palette name to set default color in prop', (t) => {
  const props = { theme, fg: 'inverted' }
  const expected = { color: COLOR_WHITE }

  const resultCustom = toStyles(customColors(props))
  const resultExported = toStyles(exportedColors(props))

  t.deepEqual(resultCustom, expected)
  t.deepEqual(resultExported, expected)
})
