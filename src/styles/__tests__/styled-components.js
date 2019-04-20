import 'jest-styled-components'
import styled from 'styled-components'
import { createElement as h } from 'react'
import { space, sizes, colors } from '../..'
import { toJSON } from '../../../test-helpers'

const theme = {
  media: {
    sm: '(max-width: 600px)'
  },
  space: [ 0, 8, 16, 32, 64 ],
  color: {
    blue: '#0000FF'
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

test('base', () => {
  const Box = styled.div`
    ${space}
    ${sizes}
    ${colors}
  `

  const tree = toJSON(h(Box, { theme, width: 1, tm: 'auto', m: { all: 1, sm: 0 } }))
  expect(tree).toMatchSnapshot()
})
