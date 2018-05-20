import { DEFAULT_KEY } from '../constants'

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
  }
}
