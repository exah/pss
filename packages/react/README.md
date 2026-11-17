# PSS React

React primitives styled with PSS and Emotion.

## Install

```sh
npm install pss-react react react-dom @emotion/react @emotion/styled
```

TypeScript consumers should also install `@types/react`. The `pss` core package
is installed as a dependency.

## Example

```tsx
import { Box, Provider } from 'pss-react'

const theme = {
  colors: { primary: '#1769aa' },
}

export function Example() {
  return (
    <Provider theme={theme}>
      <Box pss={{ color: 'primary', padding: 16 }}>Hello</Box>
    </Provider>
  )
}
```

The package exports `Base`, `Box`, layout primitives, form controls, text
components, and theme helpers. Components accept standard element props and
support the `as`, `pss`, and theme-aware style props.

MIT © John Grishin
