import test from 'ava'
import { flatten, mergeDeepRight } from 'ramda'
import { DEFAULT_THEME as theme } from '../../themes/default'
import { margin, padding } from '../space'

const css = (styles) => flatten(styles).reduce(mergeDeepRight, {})

test('set one step margin for every media', (t) => {
  const result = margin({ theme, mg: 1 })

  t.snapshot(css(result))
})

test('override one step margin on mobile and tablet', (t) => {
  const result = margin({ theme, mg: 1, mglM: 2, mgxT: 2 })

  t.snapshot(css(result))
})

test('set padding', (t) => {
  const result = padding({ theme, pdyD: 2, pdyM: 3, pdT: 3, pd: 4 })

  t.snapshot(css(result))
})
