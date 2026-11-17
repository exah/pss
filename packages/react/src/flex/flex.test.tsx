import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Flex } from './flex.js'

test('renders as a flex container by default', () => {
  render(<Flex>Flex</Flex>)

  const flex = screen.getByText('Flex')

  expect(flex.tagName).toBe('DIV')
  expect(flex).toHaveStyleRule('display', 'flex')
})

test('sets gap and alignment from props', () => {
  render(<Flex gap={8} align="center">Flex</Flex>)

  const flex = screen.getByText('Flex')

  expect(flex).toHaveStyleRule('gap', '8px')
  expect(flex).toHaveStyleRule('align-items', 'center')
})
