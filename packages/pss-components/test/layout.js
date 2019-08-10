import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { Box, Layout } from '../src'

describe('Layout', () => {
  test('Holy Grail', () => {
    const result = renderJSON(
      <Layout flexDirection='column' minHeight='100%'>
        <Box as='header'>
          Header
        </Box>
        <Layout.Content as='main'>
          Main
        </Layout.Content>
        <Box as='footer'>
          Footer
        </Box>
      </Layout>
    )

    expect(result).toMatchSnapshot()
  })

  test('Media Object', () => {
    const result = renderJSON(
      <Layout>
        <Layout.Side>
          Side
        </Layout.Side>
        <Layout.Content>
          Content
        </Layout.Content>
      </Layout>
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${Layout}`).toEqual(anyClassName)
    expect(`${Layout.Side}`).toEqual(anyClassName)
    expect(`${Layout.Content}`).toEqual(anyClassName)
  })
})
