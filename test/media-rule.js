import test from 'ava'
import { createPropStyles, mediaRule } from '../src'
import { theme, toStyles } from './_helpers.js'

test('return style', t => {
  const style = createPropStyles({
    hideOn: mediaRule('display', 'none')
  })

  const expected = {
    '@media (max-width: 600px)': {
      display: 'none'
    }
  }

  t.deepEqual(toStyles(style({ theme, hideOn: 'M' })), expected)
  t.deepEqual(toStyles(style({ theme, hideOn: { M: true } })), expected)
  t.deepEqual(toStyles(style({ theme, hideOnM: true })), expected)
})

test('multiple media', t => {
  const style = createPropStyles({
    hideOn: mediaRule('display', 'none')
  })

  const expected = {
    '@media (max-width: 600px)': {
      display: 'none'
    },
    '@media (min-width: 601px)': {
      display: 'none'
    }
  }

  t.deepEqual(toStyles(style({ theme, hideOn: { M: true, D: true } })), expected)
  t.deepEqual(toStyles(style({ theme, hideOnM: true, hideOnD: true })), expected)
})

test('return nothing', t => {
  const style = createPropStyles({
    hideOn: mediaRule('display', 'none')
  })

  t.deepEqual(toStyles(style({ theme, hideOn: 'default' })), {})
  t.deepEqual(toStyles(style({ theme, hideOn: true })), {})
  t.deepEqual(toStyles(style({ theme, hideOn: 'wrong' })), {})
  t.deepEqual(toStyles(style({ theme, hideOn: false })), {})
  t.deepEqual(toStyles(style({ theme, hideOn: null })), {})
})
