import test from 'ava'
import { MEDIA_KEY, SIZES_KEY } from '../src/constants'

import {
  createPropStyles,
  createSizeProp,
  createSizeStyle,
  styles
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
  height: createSizeProp('height'),
  width: createSizeProp('width'),
  maxWidth: createSizeProp('maxWidth'),
  maxHeight: createSizeProp('maxHeight'),
  minHeight: createSizeProp('minHeight'),
  minWidth: createSizeProp('minWidth')
})

test('props -> sizes relative value', (t) => {
  const result = toStyles(sizesPropStyles({
    theme,
    height: true,
    width: 1,
    minWidth: 0,
    maxWidth: false,
    minHeight: (3 / 4),
    maxHeight: 'auto'
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
    height: 'custom.my-value'
  }))

  t.deepEqual(result, {
    height: '1000px'
  })
})

test('props -> sizes theme values', (t) => {
  const result1 = toStyles(sizesPropStyles({
    theme,
    minWidth: 'nudge',
    maxWidthM: 'xl'
  }))

  const result2 = toStyles(sizesPropStyles({
    theme,
    minWidth: 'nudge',
    maxWidth: {
      M: 'xl'
    }
  }))

  const expected = {
    minWidth: '2px',
    '@media (max-width: 600px)': {
      minWidth: '1px',
      maxWidth: '100px'
    }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('props -> sizes custom values', (t) => {
  const result1 = toStyles(sizesPropStyles({
    theme,
    height: '100px',
    widthM: '20px',
    minHeightM: '300px'
  }))

  const result2 = toStyles(sizesPropStyles({
    theme,
    height: '100px',
    width: {
      M: '20px'
    },
    minHeight: {
      M: '300px'
    }
  }))

  const expected = {
    height: '100px',
    '@media (max-width: 600px)': {
      width: '20px',
      minHeight: '300px'
    }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
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

  const nudgeOnMobile = toStyles(styles.onMedia('M', height('nudge'))({ theme }))

  t.deepEqual(nudgeOnMobile, {
    '@media (max-width: 600px)': {
      height: '1px'
    }
  })
})
