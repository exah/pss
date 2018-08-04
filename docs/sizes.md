Consistent `sizes` system for `width`, `height` and any other related props (even for position).

**`String` values:**

- Get value by path in `theme.size` or in top level `theme` object
- If value in `theme.sizes` is an `Object` with media keys (like in `theme.media`) value is responsive
- Other `String` values is passed as raw CSS value (like `'10%'` or `'100vh'`).

**`Number` values:**

- From 0-1 it is converted to percentage widths
- Greater than 1 are converted to pixel values.

All examples use this [`theme`](#createtheme):

```js
const theme = createTheme({
  media: {
    M: `(max-width: 600px)`
  },
  size: {
    small: '10px',
    medium: '20px',
    block: {
      default: '500px',
      M: '300px'
    }
  },
  site: {
    width: '1300px'
  }
})
```
