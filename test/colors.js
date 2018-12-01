import test from 'ava'
import { mergeDeepRight } from 'ramda'
import { colors, createPropStyles, rule, colorValue } from '../src'
import { toStyles, testValue } from './_helpers'

const COLOR_WHITE = '#ffffff'
const COLOR_BLACK = '#000000'
const COLOR_YELLOW = '#fff000'
const COLOR_SHADOW = 'rgba(0, 0, 0, 0.5)'

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  color: {
    yellow: COLOR_YELLOW,
    white: COLOR_WHITE,
    black: COLOR_BLACK
  },
  palette: {
    default: {
      fg: COLOR_BLACK,
      bg: COLOR_WHITE,
      shadow: COLOR_SHADOW,
      primary: COLOR_BLACK,
      accent: COLOR_YELLOW
    },
    inverted: {
      fg: COLOR_WHITE,
      bg: COLOR_BLACK,
      shadow: COLOR_SHADOW,
      primary: COLOR_WHITE,
      accent: COLOR_YELLOW
    }
  }
}

const themeInverted = mergeDeepRight(theme, {
  default: { palette: 'inverted' }
})

const shadow = createPropStyles({
  shadow: rule('boxShadow', colorValue('shadow', (color) => `0 0 20px 0 ${color}`))
})

test('fg', testValue({
  theme,
  fn: colors,
  prop: 'fg',
  cssProp: 'color',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ],
  trueValue: COLOR_BLACK,
  falseValue: 'inherit'
}))

test('bg', testValue({
  theme,
  fn: colors,
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

  t.deepEqual(toStyles(colors(props)), expected)
})

test('change default theme to "inverted"', (t) => {
  const props = {
    theme: themeInverted,
    tm: true
  }

  const expected = {
    color: COLOR_WHITE,
    backgroundColor: COLOR_BLACK
  }

  t.deepEqual(toStyles(colors(props)), expected)
})

test('reset theme colors on mobile', (t) => {
  const props = {
    theme: themeInverted,
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

  t.deepEqual(toStyles(colors(props)), expected)
})

test('set custom  colors', (t) => {
  const customColor = 'rgba(255, 0, 255, 0.3)'
  const props = { theme, fg: customColor, bg: 'custom-color' }
  const expected = { color: customColor, backgroundColor: 'custom-color' }

  t.deepEqual(toStyles(colors(props)), expected)
})

test('use palette name to set default color in prop', (t) => {
  const props = { theme, fg: 'inverted' }
  const expected = { color: COLOR_WHITE }

  t.deepEqual(toStyles(colors(props)), expected)
})

test('transform color value', (t) => {
  const props = { theme, shadow: true }
  const expected = { boxShadow: `0 0 20px 0 ${COLOR_SHADOW}` }

  t.deepEqual(toStyles(shadow(props)), expected)
})
