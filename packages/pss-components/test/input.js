import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { Input } from '../src'

describe('Input', () => {
  test('snapshot', () => {
    const result = renderJSON(
      <Input height='300px' mx='auto' bg='#000' fg='#fff' value='Input' />
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${Input}`).toEqual(anyClassName)
  })
})
