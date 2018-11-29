import test from 'ava'

import {
  createPropStyles,
  experimentalCreateRule,
  sizeValue
} from '../src'

import { MEDIA_KEY, SIZES_KEY } from '../src/constants'
import { toStyles } from './_helpers'

const theme = {
  [MEDIA_KEY]: {
    all: null,
    sm: '(max-width: 600px)'
  },
  [SIZES_KEY]: {
    nudge: {
      default: 2,
      sm: 1
    },
    xl: 100,
    none: 0
  },
  custom: {
    'my-value': '1000vh'
  }
}

test('sizeValue: 100%', (t) => {
  const style = createPropStyles({
    height: experimentalCreateRule('height', sizeValue())
  })

  const expected = {
    height: '100%'
  }

  t.deepEqual(toStyles(style({ theme, height: 1 })), expected)
  t.deepEqual(toStyles(style({ theme, height: '100%' })), expected)
  t.deepEqual(toStyles(style({ theme, height: true })), expected)
})

test('sizeValue: sizes.xl', (t) => {
  const style = createPropStyles({
    height: experimentalCreateRule('height', sizeValue())
  })

  const expected = {
    height: '100px'
  }

  t.deepEqual(toStyles(style({ theme, height: 100 })), expected)
  t.deepEqual(toStyles(style({ theme, height: 'xl' })), expected)
})

test('sizeValue: sizes.nudge', (t) => {
  const style = createPropStyles({
    height: experimentalCreateRule('height', sizeValue())
  })

  const expected = {
    height: '2px',
    [`@media ${theme.media.sm}`]: {
      height: '1px'
    }
  }

  t.deepEqual(toStyles(style({ theme, height: 'nudge' })), expected)
  t.deepEqual(toStyles(style({ theme, height: { all: 2, sm: '1px' } })), expected)
})

test('sizeValue: 0', (t) => {
  const style = createPropStyles({
    height: experimentalCreateRule('height', sizeValue())
  })

  const expected = {
    height: 0
  }

  t.deepEqual(toStyles(style({ theme, height: 0 })), expected)
  t.deepEqual(toStyles(style({ theme, height: false })), expected)
  t.deepEqual(toStyles(style({ theme, height: 'none' })), expected)
})

test('sizeValue: custom.my-value', (t) => {
  const style = createPropStyles({
    height: experimentalCreateRule('height', sizeValue())
  })

  const expected = {
    height: '1000vh'
  }

  t.deepEqual(toStyles(style({ theme, height: 'custom.my-value' })), expected)
})
