import { render, screen } from '@testing-library/react'
import { Base } from './base'

test('get correct element inside a "ref"', () => {
  const ref = jest.fn()

  render(<Base ref={(element) => ref(element)}>Base</Base>)

  expect(screen.getByText('Base')).toBeInTheDocument()
  expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement)
})

test('change element with "as" prop', () => {
  const ref = jest.fn()

  render(<Base as="button" ref={(element) => ref(element)} />)

  expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement)
})

test('using correct default styles', () => {
  render(<Base>Base</Base>)

  expect(screen.getByText('Base')).toHaveStyle({
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: 0,
    background: 'none',
    font: 'inherit',
    color: 'inherit',
    textAlign: 'inherit',
    textDecoration: 'none',
  })
})

test('using correct default styles for a link', () => {
  render(
    <Base as="a" href="https://google.com">
      Base
    </Base>
  )

  expect(screen.getByText('Base')).toHaveStyle({
    textDecoration: 'none',
  })
})
