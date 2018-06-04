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

/**
 * Helper that creates theme with required defaults
 *
 * @example
 * const theme = createTheme({
 *   media: {
 *     M: '(max-width: 600px)'
 *   },
 *   space: {
 *     default: [ 0, 10, 20, 30, 60 ],
 *     M: [ 0, 10, 15, 30, 30 ]
 *   },
 *   size: {
 *     s: 10,
 *     m: 25,
 *     l: 50
 *   },
 *   color: {
 *     red: '#ff0000'
 *   },
 *   palette: {
 *     default: {
 *       bg: '#ffffff',
 *       fg: '#000000'
 *     }
 *     inverted: {
 *       bg: '#000000'
 *       fg: '#ffffff',
 *     }
 *   }
 * })
 *
 * @example
 * {
 *   default: {
 *     media: 'default',
 *     palette: 'default'
 *   },
 *   media: {
 *     default: null,
 *     M: '(max-width: 600px)'
 *   },
 *   space: {
 *     default: [ 0, 10, 20, 30, 60 ],
 *     M: [ 0, 10, 15, 30, 30 ]
 *   },
 *   size: {
 *     s: 10,
 *     m: 25,
 *     l: 50
 *   },
 *   color: {
 *     red: '#ff0000'
 *   },
 *   palette: {
 *     default: {
 *       bg: '#ffffff',
 *       fg: '#000000'
 *     }
 *     inverted: {
 *       bg: '#000000'
 *       fg: '#ffffff',
 *     }
 *   }
 * }
 */

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
