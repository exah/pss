import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { Box } from '../src'

describe('Box', () => {
  test('snapshot', () => {
    const result = renderJSON(
      <Box height='300px' mx='auto' bg='#000' fg='#fff'>
        Box
      </Box>
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${Box}`).toEqual(anyClassName)
  })
})
