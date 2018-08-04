Prop styles for getting current `palette` or `color` value from `theme`.

Result can be changed in nested components with setting other key in `theme.default.palette`.

All examples use this [`theme`](#createtheme):

```js
const theme = createTheme({
  default: {
    palette: 'default' // this can be changed
  },
  color: {
    red: '#ff0000',
    black: '#222222',
    white: '#ffffff'
  },
  palette: {
    default: { // currently active
      bg: '#ffffff',
      fg: '#222222',
      accent: '#ff0000',
      shadow: 'rgba(0, 0, 0, 0.2)'
    },
    inverted: {
      bg: '#222222',
      fg: '#ffffff',
      accent: '#ff0000'
    }
  }
})
```
