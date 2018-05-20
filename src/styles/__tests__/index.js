import test from 'ava'
import { flatten, mergeDeepRight } from 'ramda'
import { DEFAULT_THEME as theme } from '../../themes/default'
import { space } from '../space'

const css = (styles) => flatten(styles).reduce(mergeDeepRight, {})
// const log = (data) => console.log(JSON.stringify(data, null, 2))

test('set one step space for every media', (t) => {
  const result = space({ theme, mg: 1 })

  t.snapshot(css(result))
})

test('override default one step on mobile and tablet', (t) => {
  const result = space({ theme, mg: 1, mglM: 2, mgxT: 2 })

  t.snapshot(css(result))
})

test('set margin, padding with `mg`, `pd` props', (t) => {
  const result = space({
    theme,
    mg: 1,
    mgD: 2,
    mgxM: 1,
    mgy: 3,
    mgbM: 3,
    mgl: -1,
    pdyD: 2,
    pdyM: 3,
    pdT: 3,
    pd: 4
  })

  t.snapshot(css(result))
})
