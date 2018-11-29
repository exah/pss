import test from 'ava'
import { MEDIA_KEY, SIZES_KEY } from '../src/constants'

import {
  createPropStyles,
  createSize,
  createSizeMixin,
  sizes as exportedSizes,
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

const customSizes = createPropStyles({
  height: createSize('height'),
  width: createSize('width'),
  maxWidth: createSize('maxWidth'),
  maxHeight: createSize('maxHeight'),
  minHeight: createSize('minHeight'),
  minWidth: createSize('minWidth')
})

test('props -> sizes relative value', (t) => {
  const props = {
    theme,
    height: true,
    width: 1,
    minWidth: 0,
    maxWidth: false,
    minHeight: (3 / 4),
    maxHeight: 'auto'
  }

  const expected = {
    height: '100%',
    width: '100%',
    minWidth: 0,
    maxWidth: 0,
    minHeight: '75%',
    maxHeight: 'auto'
  }

  const result1 = toStyles(customSizes(props))
  const result2 = toStyles(exportedSizes(props))

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('props -> sizes path from theme', (t) => {
  const props = {
    theme,
    height: 'custom.my-value'
  }

  const expected = {
    height: '1000px'
  }

  const result1 = toStyles(customSizes(props))
  const result2 = toStyles(exportedSizes(props))

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('props -> sizes theme values', (t) => {
  const propsSuffix = {
    theme,
    minWidth: 'nudge',
    maxWidthM: 'xl'
  }

  const propsObject = {
    theme,
    minWidth: 'nudge',
    maxWidth: {
      M: 'xl'
    }
  }

  const result1 = toStyles(customSizes(propsSuffix))
  const result2 = toStyles(exportedSizes(propsSuffix))
  const result3 = toStyles(customSizes(propsObject))
  const result4 = toStyles(exportedSizes(propsObject))

  const expected = {
    minWidth: '2px',
    '@media (max-width: 600px)': {
      minWidth: '1px',
      maxWidth: '100px'
    }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
  t.deepEqual(result3, expected)
  t.deepEqual(result4, expected)
})

test('props -> sizes custom values', (t) => {
  const propsSuffix = {
    theme,
    height: '100px',
    widthM: '20px',
    minHeightM: '300px'
  }

  const propsObject = {
    theme,
    height: '100px',
    width: {
      M: '20px'
    },
    minHeight: {
      M: '300px'
    }
  }

  const result1 = toStyles(customSizes(propsSuffix))
  const result2 = toStyles(exportedSizes(propsSuffix))
  const result3 = toStyles(customSizes(propsObject))
  const result4 = toStyles(exportedSizes(propsObject))

  const expected = {
    height: '100px',
    '@media (max-width: 600px)': {
      width: '20px',
      minHeight: '300px'
    }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
  t.deepEqual(result3, expected)
  t.deepEqual(result4, expected)
})

test('style -> set height', (t) => {
  const height = createSizeMixin('height')
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
