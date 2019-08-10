import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { theme } from '../.internal/demo-theme'
import { Feed, MatchMediaProvider, ThemeProvider } from '../src'

describe('Feed', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: true,
        addListener () {},
        removeListener () {}
      }))
    })
  })

  test('as selector', () => {
    expect(`${Feed}`).toEqual(anyClassName)
    expect(`${Feed.Item}`).toEqual(anyClassName)
  })

  test('empty', () => {
    const result = renderJSON(<Feed />)

    expect(result).toMatchSnapshot()
  })

  test('basic', () => {
    const result = renderJSON(
      <Feed column={3}>
        <Feed.Item>
          Item
        </Feed.Item>
        <Feed.Item>
          Item
        </Feed.Item>
        <Feed.Item>
          Item
        </Feed.Item>
      </Feed>
    )

    expect(result).toMatchSnapshot()
  })

  test('with theme', () => {
    const result = renderJSON(
      <ThemeProvider theme={theme}>
        <MatchMediaProvider>
          <Feed space={2} column={{ all: 3, md: 6, sm: 12 }}>
            <Feed.Item>
              Item
            </Feed.Item>
          </Feed>
        </MatchMediaProvider>
      </ThemeProvider>
    )

    expect(result).toMatchSnapshot()
  })
})
