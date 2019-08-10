import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { List } from '../src'

describe('List', () => {
  test('snapshot', () => {
    const result = renderJSON(
      <List>
        <List.Item>Item</List.Item>
      </List>
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${List}`).toEqual(anyClassName)
    expect(`${List.Item}`).toEqual(anyClassName)
  })
})
