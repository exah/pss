import test from 'ava'
import renderer from 'react-test-renderer'
import styled, { ServerStyleSheet } from 'styled-components'
import { createElement as h } from 'react'
import { space, sizes, colors } from '../src'
import { theme } from './_helpers.js'

test('basic', (t) => {
  const sheet = new ServerStyleSheet()

  const Box = styled.div`
    ${space}
    ${sizes}
    ${colors}
  `

  const element = h(Box, { theme, width: true, tm: true, mg: true, mgM: 0 })
  const tree = renderer.create(sheet.collectStyles(element)).toJSON()

  t.snapshot(tree)
  t.snapshot(sheet.getStyleTags())
})
