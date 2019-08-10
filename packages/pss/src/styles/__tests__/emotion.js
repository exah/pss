import { createElement as h } from 'react'
import styled from '@emotion/styled'
import serializer from 'jest-emotion'
import { space, sizes, colors } from '../..'
import { toJSON } from '../../../test-helpers'

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

expect.addSnapshotSerializer(serializer)

test('basic', () => {
  const Box = styled('div')(space, sizes, colors)

  const tree = toJSON(h(Box, { theme, width: 1, tm: 'auto', m: { all: 1, M: 0 } }))
  expect(tree).toMatchSnapshot()
})
