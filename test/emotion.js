import test from 'ava'
import renderer from 'react-test-renderer'
import { createElement as h } from 'react'
import { css, caches, flush } from 'emotion'
import styled from 'react-emotion'
import { space, sizes, colors } from '../src'

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  space: [ 0, 8, 16, 32, 64 ],
  palette: {
    default: {
      bg: '#ffffff',
      fg: '#000000'
    },
    inverted: {
      bg: '#000000',
      fg: '#ffffff'
    }
  }
}

test('basic', (t) => {
  flush()

  const sizeClassName = css(sizes({ theme, width: true, maxHeight: (3 / 4) }))

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
  const element = h(Box, { theme, width: true, tm: true, mg: { all: true, M: 0 } })
  const tree = renderer.create(element).toJSON()

  t.snapshot(tree)
  t.snapshot(caches.registered)
})
