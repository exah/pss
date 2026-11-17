import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Base } from './base.js'

test('get correct element inside a "ref"', () => {
  const ref = vi.fn()

  render(<Base ref={(element) => ref(element)}>Base</Base>)

  expect(screen.getByText('Base')).toBeInTheDocument()
  expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement)
})

test('change element with "as" prop', () => {
  const ref = vi.fn()

  render(<Base as="button" ref={(element) => ref(element)} />)

  expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement)
})

test('using correct default styles', () => {
  render(<Base>Base</Base>)

  const base = screen.getByText('Base')

  expect(base).toHaveStyleRule('margin', '0')
  expect(base).toHaveStyleRule('padding', '0')
  expect(base).toHaveStyleRule('border', '0')
  expect(base).toHaveStyleRule('border-radius', '0')
  expect(base).toHaveStyleRule('background', 'none')
  expect(base).toHaveStyleRule('font', 'inherit')
  expect(base).toHaveStyleRule('color', 'inherit')
  expect(base).toHaveStyleRule('text-align', 'inherit')
  expect(base).toHaveStyleRule('text-decoration', 'none')
})

test('using correct default styles for a link', () => {
  render(
    <Base as="a" href="https://google.com">
      Base
    </Base>
  )

  expect(screen.getByText('Base')).toHaveStyleRule('text-decoration', 'none')
})
