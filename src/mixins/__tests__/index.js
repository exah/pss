/* eslint-env jest */

import 'jest-styled-components'
import styled from 'styled-components'
import { createElement as h } from 'react'
import { mq, prop, themePath, px } from '../..'
import { toJSON } from '../../../test-helpers'

const theme = {
  media: {
    sm: '(max-width: 600px)'
  },
  space: [ 0, 8, 16, 32, 64 ],
  color: {
    blue: '#0000FF'
  },
  size: {
    card: 100
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

describe('mixin', () => {
  const Box = styled('div')`
    background-color: ${prop('bg', 'blue')};
    color: ${prop('fg', themePath('color.blue'))};
    border-color: ${prop('borderColor')};
    width: ${prop('width', '100%')};
    height: ${themePath('size.card', px)};

    @media ${mq('sm')} {
      background-color: black;
      width: ${prop('width.sm')};
    }
  `

  test('prop', () => {
    const tree = toJSON(h(Box, { theme, bg: 'red', fg: 'red', width: { sm: '50px' } }))
    expect(tree).toHaveStyleRule('background-color', 'red')
    expect(tree).toHaveStyleRule('color', 'red')
    expect(tree).toHaveStyleRule('width', '100%')
    expect(tree).toHaveStyleRule('width', '50px', { media: theme.media.sm })
    expect(tree).not.toHaveStyleRule('border-color')
  })

  test('mq', () => {
    const tree = toJSON(h(Box, { theme }))
    expect(tree).toHaveStyleRule('background-color', 'black', { media: theme.media.sm })
  })

  test('`themePath` should apply transform', () => {
    const tree = toJSON(h(Box, { theme }))
    expect(tree).toHaveStyleRule('height', '100px')
  })

  test('fallbacks', () => {
    const tree = toJSON(h(Box, { theme }))
    expect(tree).toHaveStyleRule('background-color', 'blue')
    expect(tree).toHaveStyleRule('color', '#0000FF')
    expect(tree).toHaveStyleRule('width', '100%')
    expect(tree).toMatchSnapshot()
  })
})
