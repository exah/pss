// @flow

import type {
  ThemeObj
} from '../types'

import {
  DEFAULT_KEY,
  COLORS_KEY,
  MEDIA_KEY,
  PALETTE_KEY,
  SIZES_KEY,
  SPACE_KEY
} from '../constants'

// COMPAT:
const createTheme = (theme: ThemeObj = {}): ThemeObj => ({
  ...theme,
  [DEFAULT_KEY]: {
    [PALETTE_KEY]: DEFAULT_KEY,
    [MEDIA_KEY]: DEFAULT_KEY,
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

export {
  createTheme
}
