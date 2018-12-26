import 'jest-styled-components'
import renderer from 'react-test-renderer'
import styled from 'styled-components'
import { createElement as h } from 'react'
import { space, sizes, colors, mq, prop, themePath } from '../src'

const toJSON = (element) => renderer.create(element).toJSON()

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

  const tree = toJSON(h(Box, { theme, width: true, tm: true, mg: { all: true, sm: 0 } }))
  expect(tree).toMatchSnapshot()
})

describe('mixin', () => {
  const Box = styled('div')`
    background-color: ${prop('bg', 'blue')};
    color: ${prop('fg', themePath('color.blue'))};
    border-color: ${prop('borderColor')};

    @media ${mq('sm')} {
      background-color: black;
    }
  `

  test('prop', () => {
    const tree = toJSON(h(Box, { theme, bg: 'red' }))
    expect(tree).toHaveStyleRule('background-color', 'red')
  })

  test('mq', () => {
    const tree = toJSON(h(Box, { theme, bg: 'red' }))
    expect(tree).toHaveStyleRule('background-color', 'black', { media: theme.media.sm })
  })

  test('themePath', () => {
    expect(toJSON(h(Box, { theme, fg: 'red' }))).toHaveStyleRule('color', 'red')
  })

  test('fallbacks', () => {
    expect(toJSON(h(Box, { theme }))).toHaveStyleRule('background-color', 'blue')
    expect(toJSON(h(Box, { theme }))).toHaveStyleRule('color', '#0000FF')
    expect(toJSON(h(Box, { theme }))).toMatchSnapshot()
  })
})
