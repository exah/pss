# PSS

Prop Styles System provides small, theme-aware style helpers for CSS-in-JS
design systems. It maps concise component props and theme values to CSS objects,
including responsive values and variants.

## Install

```sh
npm install pss
```

`csstype` is a peer dependency used by the public CSS types.

## Example

```ts
import { pss } from 'pss'

const theme = {
  colors: { primary: '#1769aa' },
}

const styles = pss({
  theme,
  pss: {
    color: 'primary',
    padding: 16,
  },
})
```

`pss` returns CSS interpolation values for a styling library to consume. The
package also exports helpers such as `style`, `spaceStyle`, `variant`, and
`combine` for composing prop-driven styles.

## Related package

[`pss-react`](https://github.com/exah/pss/tree/master/packages/react) provides
ready-to-use React primitives built on PSS.

MIT © John Grishin
