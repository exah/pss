import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Box } from './box.js'

test('using border box model', () => {
  render(<Box>Box</Box>)

  expect(screen.getByText('Box')).toHaveStyleRule('box-sizing', 'border-box')
})

test('change style with "pss" prop', () => {
  render(<Box pss={{ color: 'red' }}>Box</Box>)

  expect(screen.getByText('Box')).toHaveStyleRule('color', 'red')
})

test('change style with "pss" prop and take value from theme', () => {
  const theme = {
    breakpoints: {
      $md: '(max-width: 300px)',
    },
    colors: {
      primary: 'blue',
      success: 'green',
    },
  }

  render(
    <Box theme={theme} pss={{ color: 'primary', $md: { color: 'success' } }}>
      Box
    </Box>
  )

  const box = screen.getByText('Box')

  expect(box).toHaveStyleRule('color', 'blue')
  expect(box).toHaveStyleRule('color', 'green', { media: '(max-width: 300px)' })
})

test('set margin with "m" prop and take value from theme', () => {
  const theme = {
    breakpoints: {
      $: null,
      $md: '(max-width: 300px)',
    },
    space: {
      's-4': 4,
      's-8': 8,
      's-16': 16,
    },
  }

  render(
    <Box theme={theme} mx={{ $: 's-8', $md: 's-16' }} w={100}>
      Box
    </Box>
  )

  const box = screen.getByText('Box')

  expect(box).toHaveStyleRule('margin-left', '8px')
  expect(box).toHaveStyleRule('margin-left', '16px', {
    media: '(max-width: 300px)',
  })

  expect(box).toHaveStyleRule('margin-right', '8px')
  expect(box).toHaveStyleRule('margin-right', '16px', {
    media: '(max-width: 300px)',
  })

  expect(box).toHaveStyleRule('width', '100px')
})
