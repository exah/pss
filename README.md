# 🚧 prop-styles-system

> Props based design system for Styled Components <br>
> for `styled-components`, `emotion` or `glamorous`

## Install

```
$ yarn add @exah/prop-styles-system
```


## Why?

With power of [`theme`](https://emotion.sh/docs/theming) prop provided to Styled Components you can use your design system rules to define component styles (i.e. sizes, spacing, colors, text styles, media queries ...). And while developing isolated components you need to create most re-usable solution and don't need to think about page layout, spacing between components and setting specific styles, but then in actual responsive layout you have to do this and keep it with same design system. 

My solution is to use media aware **prop styles** to set spacing, color themes to components and override styles in deferent media  queries.


## [API](./docs/api.md)

## Example

Create prop styles and add them to styled component

```js
import styled from 'react-emotion'
import { propStylesSystem, sizeProp } from '@exah/prop-styles-system'

const Box = styled.div(propStylesSystem({
  ht: sizeProp('height'),
  wd: sizeProp('width'),
  hide: { display: 'none' }
}))
```

Use props in component wrapped in `ThemeProvider` with your `theme`

```js
import { ThemeProvider } from 'emotion-theming'
import { createTheme } from '@exah/prop-styles-system' 

const theme = createTheme({
  media: {
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  }
})

<ThemeProvider theme={theme}>
  <Box ht={(1 / 2)} htT={300} wdT='100%' hideM />
</ThemeProvider>
```
  
CSS-in-JS result

```css
.css-hash {
  height: 50%;
}

@media (min-width: 601px) and (max-width: 1024px) {
  .css-hash {
    height: 300px;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .css-hash {
    display: none;
  }
}
```



---

MIT © [John Grishin](http://johngrish.in)
