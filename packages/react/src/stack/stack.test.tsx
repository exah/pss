import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stack } from './stack.js'

test('renders as a flex container by default', () => {
  render(<Stack>Stack</Stack>)

  const stack = screen.getByText('Stack')

  expect(stack.tagName).toBe('DIV')
  expect(stack).toHaveStyleRule('display', 'flex')
})

test('sets gap and alignment from props', () => {
  render(<Stack gap={8} align="center">Stack</Stack>)

  const stack = screen.getByText('Stack')

  expect(stack).toHaveStyleRule('gap', '8px')
  expect(stack).toHaveStyleRule('align-items', 'center')
})
