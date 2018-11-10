import test from 'ava'
import { MEDIA_KEY, SIZES_KEY } from '../src/constants'

import {
  createPropStyles,
  createSizeProp,
  createSizeStyle,
  onMedia
} from '../src'

import { toStyles } from './_helpers'

const theme = {
  [MEDIA_KEY]: {
    D: '(min-width: 1025px)',
    M: '(max-width: 600px)'
  },
  [SIZES_KEY]: {
    nudge: {
      default: 2,
      'M': 1
    },
    xl: 100
  },
  custom: {
    'my-value': '1000px'
  }
}

const sizesPropStyles = createPropStyles({
  ht: createSizeProp('height'),
  wd: createSizeProp('width'),
  maxWd: createSizeProp('maxWidth'),
  maxHt: createSizeProp('maxHeight'),
  minHt: createSizeProp('minHeight'),
  minWd: createSizeProp('minWidth')
})

test('props -> sizes relative value', (t) => {
  const result = toStyles(sizesPropStyles({
    theme,
    ht: true,
    wd: 1,
    minWd: 0,
    maxWd: false,
    minHt: (3 / 4),
    maxHt: 'auto'
  }))

  t.deepEqual(result, {
    height: '100%',
    width: '100%',
    minWidth: 0,
    maxWidth: 0,
    minHeight: '75%',
    maxHeight: 'auto'
  })
})

test('props -> sizes path from theme', (t) => {
  const result = toStyles(sizesPropStyles({
    theme,
    ht: 'custom.my-value'
  }))

  t.deepEqual(result, {
    height: '1000px'
  })
})

test('props -> sizes theme values', (t) => {
  const result = toStyles(sizesPropStyles({
    theme,
    minWd: 'nudge',
    maxWdM: 'xl'
  }))

  t.deepEqual(result, {
    minWidth: '2px',
    '@media (max-width: 600px)': {
      minWidth: '1px',
      maxWidth: '100px'
    }
  })
})

test('props -> sizes custom values', (t) => {
  const result = toStyles(sizesPropStyles({
    theme,
    ht: '100px',
    wdM: '20px',
    minHtM: '300px'
  }))

  t.deepEqual(result, {
    height: '100px',
    '@media (max-width: 600px)': {
      width: '20px',
      minHeight: '300px'
    }
  })
})

test('style -> set height', (t) => {
  const height = createSizeStyle('height')
  const percent = toStyles(height()({ theme }))

  t.deepEqual(percent, {
    height: '100%'
  })

  const nudge = toStyles(height('nudge')({ theme }))

  t.deepEqual(nudge, {
    height: '2px',
    '@media (max-width: 600px)': {
      height: '1px'
    }
  })

  const nudgeOnMobile = toStyles(onMedia('M', height('nudge'))({ theme }))

  t.deepEqual(nudgeOnMobile, {
    '@media (max-width: 600px)': {
      height: '1px'
    }
  })
})
