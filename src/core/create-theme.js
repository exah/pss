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
  SPACE_KEY,
  TEXT_STYLE_KEY
} from '../constants'

/**
 * ```js
 * import { createTheme } from '@exah/prop-styles-system'
 * ```
 *
 * Function for creating `theme` with your design system settings.
 *
 * @example
 * const theme = createTheme({
 *   // Used as prop suffixes, i.e. <Box heightM='50px' />
 *   media: {
 *     M: '(max-width: 600px)'
 *   },
 *   // createSpaceProps, spacePropStyles
 *   space: {
 *     default: [ 0, 10, 20, 30, 60 ],
 *     M: [ 0, 10, 15, 30, 30 ]
 *   },
 *   // sizesPropStyles, sizeProp
 *   size: {
 *     s: 10,
 *     m: 25,
 *     l: 50
 *   },
 *   // themePropStyles, colorProp
 *   color: {
 *     red: '#ff0000'
 *   },
 *   // themePropStyles, themeProp
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

const createTheme = (theme: ThemeObj = {}): ThemeObj => ({
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
  [SIZES_KEY]: {
    ...theme[SIZES_KEY]
  },
  [COLORS_KEY]: {
    ...theme[COLORS_KEY]
  },
  [PALETTE_KEY]: {
    [DEFAULT_KEY]: {},
    ...theme[PALETTE_KEY]
  },
  [TEXT_STYLE_KEY]: {
    [DEFAULT_KEY]: {
      fontFamily: 'system-ui',
      fontSize: '100%'
    },
    ...theme[TEXT_STYLE_KEY]
  }
})

export { createTheme }
