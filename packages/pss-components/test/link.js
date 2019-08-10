import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { theme } from '../.internal/demo-theme'
import { Link, ThemeProvider } from '../src'

describe('Link', () => {
  test('empty', () => {
    const result = renderJSON(<Link />)

    expect(result).toMatchSnapshot()
  })

  test('with text', () => {
    const result = renderJSON(<Link>Hello</Link>)

    expect(result).toMatchSnapshot()
  })

  test('with theme', () => {
    const result = renderJSON(
      <ThemeProvider theme={theme}>
        <Link variant='auto'>Hello</Link>
      </ThemeProvider>
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${Link}`).toEqual(anyClassName)
  })
})
