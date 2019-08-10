import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { Button } from '../src'

describe('Button', () => {
  test('snapshot', () => {
    const result = renderJSON(
      <Button height='300px' mx='auto' bg='#000' fg='#fff'>
        Button
      </Button>
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${Button}`).toEqual(anyClassName)
  })
})
