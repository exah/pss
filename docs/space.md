Consistent `space` system for setting `margin` or `padding`.

- If value is a `Number` it takes value from `theme.space` `Array` by index
- Negative value for negative margins
- If value is a `String` it passed as raw CSS value (like `'10%'` or `'100vh'`)
- `true` value is equal to `1` index in space `Array`
- `false` value is equal to `0` index in space `Array`

All examples use this [`theme`](#createtheme):

```js
const theme = createTheme({
  media: {
    M: `(max-width: 600px)`
  },
  space: {
    default: [ 0, 10, 20, 40, 80 ],
    M: [ 0, 8, 16, 32, 64 ],
  }
})
```
