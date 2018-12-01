import test from 'ava'
import renderer from 'react-test-renderer'
import styled, { ServerStyleSheet } from 'styled-components'
import { createElement as h } from 'react'
import { space, sizes, colors } from '../src'

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 8, 16, 32, 64 ]
  },
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
