import { deepMerge } from '@exah/utils'
import { colors, createStyles, rule, colorValue } from '../..'
import { toStyles, testValue } from '../../../test-helpers'

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
    black: COLOR_BLACK,
    greyArr: [
      '#eee',
      '#ccc',
      '#ddd',
      '#aaa'
    ],
    greyObj: {
      default: '#eee',
      100: '#eee',
      200: '#ccc',
      300: '#ddd',
      400: '#aaa'
    }
  },
  palette: {
    default: {
      fg: COLOR_BLACK,
      bg: COLOR_WHITE,
      border: COLOR_BLACK,
      shadow: COLOR_SHADOW,
      primary: COLOR_BLACK,
      accent: COLOR_YELLOW
    },
    inverted: {
      fg: COLOR_WHITE,
      bg: COLOR_BLACK,
      border: COLOR_WHITE,
      shadow: COLOR_SHADOW,
      primary: COLOR_WHITE,
      accent: COLOR_YELLOW
    }
  }
}

const themeInverted = deepMerge(theme, {
  default: { palette: 'inverted' }
})

const shadowRule = rule('boxShadow', colorValue('shadow', (color) => `0 0 20px 0 ${color}`))

const shadow = createStyles({
  tm: [
    rule('color', colorValue('fg')),
    rule('backgroundColor', colorValue('bg')),
    rule('borderColor', colorValue('border')),
    shadowRule
  ],
  shadow: shadowRule
})

test('fg', testValue({
  theme,
  fn: colors,
  prop: 'fg',
  cssProp: 'color',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ],
  trueValue: COLOR_BLACK
}))

test('bg', testValue({
  theme,
  fn: colors,
  prop: 'bg',
  cssProp: 'backgroundColor',
  values: [ 'inherit', 'currentColor', 'custom', 'hotpink' ],
  trueValue: COLOR_WHITE
}))

test('theme.color as array', () => {
  expect(toStyles(colors({ theme, fg: 'greyArr.0' }))).toEqual({
    color: '#eee'
  })

  expect(toStyles(colors({ theme, fg: 'greyArr' }))).toEqual({
    color: '#eee'
  })
})

test('theme.color as object', () => {
  expect(toStyles(colors({ theme, fg: 'greyObj.200' }))).toEqual({
    color: '#ccc'
  })

  expect(toStyles(colors({ theme, fg: 'greyObj' }))).toEqual({
    color: '#eee'
  })
})

test('set theme colors and override text color on mobile', () => {
  const props = {
    theme,
    tm: true,
    fg: { M: 'accent' }
  }

  const expected = {
    color: COLOR_BLACK,
    backgroundColor: COLOR_WHITE,
    '@media (max-width: 600px)': {
      color: COLOR_YELLOW
    }
  }

  expect(toStyles(colors(props))).toEqual(expected)
})

test('change default theme to "inverted"', () => {
  const props = {
    theme: themeInverted,
    tm: true
  }

  const expected = {
    color: COLOR_WHITE,
    backgroundColor: COLOR_BLACK
  }

  expect(toStyles(colors(props))).toEqual(expected)
})

test('set custom  colors', () => {
  const customColor = 'rgba(255, 0, 255, 0.3)'
  const props = { theme, fg: customColor, bg: 'custom-color' }
  const expected = { color: customColor, backgroundColor: 'custom-color' }

  expect(toStyles(colors(props))).toEqual(expected)
})

test('use palette name to set default color in prop', () => {
  const props = { theme, fg: 'inverted' }
  const expected = { color: COLOR_WHITE }

  expect(toStyles(colors(props))).toEqual(expected)
})

test('transform color value', () => {
  const props = { theme, shadow: true }
  const expected = { boxShadow: `0 0 20px 0 ${COLOR_SHADOW}` }

  expect(toStyles(shadow(props))).toEqual(expected)
})

test('custom color combination', () => {
  expect(toStyles(shadow({ theme, tm: true }))).toEqual({
    color: COLOR_BLACK,
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_BLACK,
    boxShadow: `0 0 20px 0 ${COLOR_SHADOW}`
  })

  expect(toStyles(shadow({ theme, tm: 'inverted' }))).toEqual({
    color: COLOR_WHITE,
    backgroundColor: COLOR_BLACK,
    borderColor: COLOR_WHITE,
    boxShadow: `0 0 20px 0 ${COLOR_SHADOW}`
  })
})
