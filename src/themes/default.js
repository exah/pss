import { DEFAULT_KEY } from '../constants'
import { toRgb } from '../utils'

const MEDIA_DESKTOP = {
  key: 'D',
  query: '(min-width: 1025px)'
}

const MEDIA_TABLET = {
  key: 'T',
  query: '(min-width: 601px) and (max-width: 1024px)'
}

const MEDIA_MOBILE = {
  key: 'M',
  query: '(max-width: 600px)'
}

const COLOR_WHITE = '#ffffff'
const COLOR_BLACK = '#000000'
const COLOR_YELLOW = '#fff000'
const COLOR_WHITE_FADED = toRgb(COLOR_WHITE, 0.4)
const COLOR_BLACK_FADED = toRgb(COLOR_BLACK, 0.4)

export const DEFAULT_THEME = {
  defaults: {
    palette: DEFAULT_KEY,
    mq: DEFAULT_KEY
  },
  mqs: {
    [DEFAULT_KEY]: null,
    [MEDIA_MOBILE.key]: MEDIA_MOBILE.query,
    [MEDIA_TABLET.key]: MEDIA_TABLET.query,
    [MEDIA_DESKTOP.key]: MEDIA_DESKTOP.query
  },
  sizes: {
    space: {
      [DEFAULT_KEY]: [ 0, 10, 20, 40 ],
      [MEDIA_MOBILE.key]: [ 0, 8, 16, 32 ]
    },
    nudge: 2,
    s: 10,
    m: 20,
    l: 30
  },
  colors: {
    'yellow': COLOR_YELLOW,
    'white': COLOR_WHITE,
    'white-faded': COLOR_WHITE_FADED,
    'black': COLOR_BLACK,
    'black-faded': COLOR_BLACK_FADED
  },
  palettes: {
    [DEFAULT_KEY]: {
      foreground: COLOR_BLACK,
      background: COLOR_WHITE,
      primary: COLOR_BLACK,
      secondary: COLOR_BLACK_FADED,
      accent: COLOR_YELLOW,
      border: COLOR_BLACK_FADED
    },
    'inverted': {
      foreground: COLOR_WHITE,
      background: COLOR_BLACK,
      primary: COLOR_WHITE,
      secondary: COLOR_WHITE_FADED,
      accent: COLOR_YELLOW,
      border: COLOR_WHITE_FADED
    }
  }
}
