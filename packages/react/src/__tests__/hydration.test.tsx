import { act } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { expect, test, vi } from 'vitest'
import { Base } from '../base/base.js'
import { Box } from '../box/box.js'
import { Provider } from '../provider/provider.js'

const theme = {
  colors: {
    primary: 'blue',
  },
}

test('hydrates Base and themed Box without React hydration warnings', async () => {
  const tree = (
    <Provider theme={theme}>
      <Base as="button">Submit</Base>
      <Box pss={{ color: 'primary' }}>Themed box</Box>
    </Provider>
  )
  const container = document.createElement('div')
  container.innerHTML = renderToString(tree)
  const serverMarkup = container.innerHTML
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
  let root: ReturnType<typeof hydrateRoot> | undefined

  try {
    await act(async () => {
      root = hydrateRoot(container, tree)
    })

    expect(container.querySelector('button')?.textContent).toBe('Submit')
    expect(container.textContent).toContain('Themed box')
    expect(container.innerHTML).toBe(serverMarkup)
    expect(consoleError.mock.calls.flat().join('\n')).not.toMatch(
      /hydration|did not match/i
    )
  } finally {
    if (root) {
      await act(async () => root?.unmount())
    }
    consoleError.mockRestore()
  }
})
