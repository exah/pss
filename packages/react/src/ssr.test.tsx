// @vitest-environment node

import { expect, test } from 'vitest'
import { renderToString } from 'react-dom/server'
import { Base } from './base/base.js'
import { Box } from './box/box.js'
import { Provider } from './provider/provider.js'
import { Root } from './root/root.js'

const theme = {
  colors: {
    primary: 'blue',
  },
}

test('renders Base as a semantic element on the server', () => {
  const html = renderToString(<Base as="button">Submit</Base>)

  expect(html).toContain('<button')
  expect(html).toContain('>Submit</button>')
  expect(html).toMatch(/box-sizing:border-box/)
})

test('renders themed Box markup and Emotion styles on the server', () => {
  const html = renderToString(
    <Provider theme={theme}>
      <Box pss={{ color: 'primary' }}>Themed box</Box>
    </Provider>
  )

  expect(html).toContain('>Themed box</div>')
  expect(html).toMatch(/data-emotion="css [^"]+"/)
  expect(html).toMatch(/\.css-[^{]+\{[^}]*color:blue/)
})

test('renders Root global styles from the provider theme on the server', () => {
  const html = renderToString(
    <Provider theme={theme}>
      <Root pss={{ color: 'primary' }} />
    </Provider>
  )

  expect(html).toMatch(/data-emotion="css-global [^"]+"/)
  expect(html).toMatch(/:root\s*\{[^}]*color:blue/)
})
