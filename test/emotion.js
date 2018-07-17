import test from 'ava'
import renderer from 'react-test-renderer'
import { createElement as h } from 'react'
import { css, caches, flush } from 'emotion'
import styled from 'react-emotion'
import { space, sizes, colors } from '../src'
import { theme } from './_helpers.js'

test('basic', (t) => {
  flush()

  const sizeClassName = css(sizes({ theme, wd: true, maxHt: (3 / 4) }))

  t.is(Object.keys(caches.registered).includes(sizeClassName), true)
  t.snapshot(caches.registered)

  flush()

  const spaceClassName = css(space({ theme, mg: true }))

  t.is(Object.keys(caches.registered).includes(spaceClassName), true)
  t.snapshot(caches.registered)

  flush()

  const tmClassName = css(colors({ theme, tm: true }))

  t.is(Object.keys(caches.registered).includes(tmClassName), true)
  t.snapshot(caches.registered)

  flush()

  const Box = styled('div')(space, sizes, colors)
  const element = h(Box, { theme, wd: true, tm: true, mg: true, mgM: 0 })
  const tree = renderer.create(element).toJSON()

  t.snapshot(tree)
  t.snapshot(caches.registered)
})
