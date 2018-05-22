import test from 'ava'
import { flatten, mergeDeepRight } from 'ramda'
import { DEFAULT_THEME as theme } from '../../themes/default'
import { marginProps, paddingProps } from '../space'
import { themeProps } from '../theme'
import { sizesProps } from '../sizes'

test('set one step margin for every media', (t) => {
  const result = marginProps({ theme, mg: 1 })

  t.snapshot(flatten(result))
})

test('override one step margin on mobile and tablet', (t) => {
  const result = marginProps({ theme, mg: 1, mglM: 2, mgxT: 2 })

  t.snapshot(flatten(result))
})

test('set padding', (t) => {
  const result = paddingProps({ theme, pdyD: 2, pdyM: 3, pdT: 3, pd: 4 })

  t.snapshot(flatten(result))
})

test('set theme colors', (t) => {
  const result = themeProps({ theme, tm: true, fgM: 'accent' })
  t.snapshot(flatten(result))
})

test('override default palette key', (t) => {
  const overrideTheme = mergeDeepRight(theme, { defaults: { palette: 'inverted' } })
  const result = themeProps({ theme: overrideTheme, tm: true })
  t.pass(result)
})

test('unset theme colors on mobile', (t) => {
  const result = themeProps({ theme, tm: true, tmM: false })
  t.snapshot(flatten(result))
})

test('set default foreground color', (t) => {
  const result = themeProps({ theme, fg: true })
  t.snapshot(flatten(result))
})

test('set default accent foreground color', (t) => {
  const result = themeProps({ theme, fg: 'accent' })
  t.snapshot(flatten(result))
})

test('set default inverted palette foreground color', (t) => {
  const result = themeProps({ theme, fg: 'inverted' })
  t.snapshot(flatten(result))
})

test('set custom foreground color', (t) => {
  const result = themeProps({ theme, fg: 'rgba(255, 0, 255, 0.3)' })
  t.snapshot(flatten(result))
})

test('sizes props', (t) => {
  const result = sizesProps({
    theme,
    ht: true,
    wd: 1,
    minWd: 0,
    maxWd: false,
    minHt: (3 / 4),
    maxHt: 'nudge'
  })

  t.snapshot(result)
})
