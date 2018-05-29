// @flow
import {
  DEFAULT_KEY,
  COLORS_KEY,
  MEDIA_KEY,
  PALETTE_KEY,
  SIZES_KEY,
  SPACE_KEY,
  TEXT_STYLE_KEY
} from '../constants'

const createTheme = (theme: Object = {}): Object => ({
  ...theme,
  [DEFAULT_KEY]: {
    [PALETTE_KEY]: DEFAULT_KEY,
    [MEDIA_KEY]: DEFAULT_KEY,
    [TEXT_STYLE_KEY]: DEFAULT_KEY,
    ...theme[DEFAULT_KEY]
  },
  [MEDIA_KEY]: {
    [DEFAULT_KEY]: null,
    ...theme[MEDIA_KEY]
  },
  [SPACE_KEY]: {
    [DEFAULT_KEY]: [ 0 ],
    ...theme[SPACE_KEY]
  },
  [TEXT_STYLE_KEY]: {
    [DEFAULT_KEY]: {
      fontFamily: 'system-ui',
      fontSize: '100%'
    },
    ...theme[TEXT_STYLE_KEY]
  },
  [SIZES_KEY]: {
    ...theme[SIZES_KEY]
  },
  [COLORS_KEY]: {
    ...theme[COLORS_KEY]
  },
  [PALETTE_KEY]: {
    [DEFAULT_KEY]: {},
    ...theme[PALETTE_KEY]
  }
})

export { createTheme }
