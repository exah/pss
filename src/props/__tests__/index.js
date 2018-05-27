import test from 'ava'
import { flatten, mergeDeepRight } from 'ramda'
import { DEFAULT_KEY, PALETTE_KEY } from '../../constants'
import { DEFAULT_THEME as theme } from '../../themes/default'
import { marginProps, paddingProps } from '../space'
import { themeProps } from '../theme'
import { sizesProps } from '../sizes'
import { positionProps } from '../position'

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
  const overrideTheme = mergeDeepRight(theme, { [DEFAULT_KEY]: { [PALETTE_KEY]: 'inverted' } })
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

test('sizes props basic value', (t) => {
  const result = sizesProps({
    theme,
    ht: true,
    wd: 1,
    minWd: 0,
    maxWd: false,
    minHt: (3 / 4)
  })

  t.snapshot(result)
})

test('sizes props advanced values', (t) => {
  const result = sizesProps({
    theme,
    ht: '100px',
    wdM: '20px',
    minWd: 'nudge',
    maxWdM: 'l',
    minHtM: false
  })

  t.snapshot(result)
})

test('position props', (t) => {
  const result = positionProps({
    theme,
    prl: true,
    pstM: true,
    pabT: false,
    t: true,
    b: false,
    l: 1 / 2,
    x: 1,
    y: true,
    r: 0,
    z: 100,
    zM: 100
  })

  const zIndexFalse = positionProps({ theme, z: false })
  const zIndexTrue = positionProps({ theme, z: true })

  t.snapshot(result)
  t.snapshot(zIndexFalse)
  t.snapshot(zIndexTrue)
})
