import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { Box, Flex } from '../src'

describe('Flex', () => {
  test('snapshot', () => {
    const result = renderJSON(
      <Flex tm width={(1 / 2)} justifyContent='space-between'>
        <Box>Item</Box>
        <Box mx='auto'>Item</Box>
        <Box flex='0 1'>Item</Box>
      </Flex>
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${Flex}`).toEqual(anyClassName)
  })
})
