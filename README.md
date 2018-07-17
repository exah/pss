# 💔 prop-styles-system

> Design system utils for CSS-in-JS libraries


- [x] Support [`emotion`](https://emotion.sh), [`styled-components`](https://www.styled-components.com) and [`glamorous`](https://glamorous.rocks)
- [x] All styles are responsive by default
- [x] Customizable


## 📦 Install

```
$ yarn add @exah/prop-styles-system
```


## 📖 [API](./docs/api.md)


## 🤔 Why?


### Prop What?

**Prop Styles** is when you can set CSS styles in runtime with component props. 

For example if you want prop that hides element on mobile. Usually you will do something like this:

```js
import styled from 'react-emotion'

// Add to component
const Box = styled.div((props) => props.hideOnMobile && {  
  '@media (max-width: 600px)': {
    display: 'none' 
  }
})

// Use prop
<Box hideOnMobile /> // @media (max-width: 600px) { display: none }
```

And in large scale project with many styles this is to verbose. With `prop-styles-system` you can add `media` queries to your `theme` and any created **Prop Style** than can be changed in specified media queries with special suffix.

```js
import { createPropStyles, createTheme } from '@exah/prop-styles-system'

const myPropStyles = createPropStyles({
  hide: { display: 'none' },
  makeItRed: { backgroundColor: 'red' }
})

const myTheme = createTheme({
  media: {
    OnMobile: '(max-width: 600px)'
  }
})
```

```js
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'

const Box = styled.div(myPropStyles)

<ThemeProvider theme={myTheme}>
  <Box hideOnMobile makeItRed />
</ThemeProvider>

// background-color: red; 
// @media (max-width: 600px) { display: none }
```


### More Useful Example

Add ready to use

- [`space`](./docs/api.md#space) — for setting `margin`, `padding`
- [`sizes`](./docs/api.md#sizes) - for `width`, `height`, ...
- [`colors`](./docs/api.md#colors) — for `color`, `background-color` 

prop styles to your component.

```js
import styled from 'react-emotion'
import { space, sizes, colors } from '@exah/prop-styles-system'

const Box = styled.div(
  space,
  sizes,
  colors
)
```

Use them in runtime:

```js
<Box mgx /> // margin-left: 8px; margin-right: 8px
<Box wd={(1 / 2)} /> // width: 50%
<Box tm='inverted' /> // background-color: #000000; color: #ffffff
<Box wdM='300px' /> // @media (max-width: 600px) { width: 300px }
```

Provide custom theme:

```js
import { ThemeProvider } from 'emotion-theming'
import { createTheme } from '@exah/prop-styles-system' 

const theme = createTheme({
  media: {
    M: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 16, 32, 64, 128 ],
    M: [ 0, 8, 16, 32, 64 ]
  },
  size: {
    card: '300px',
    site: '1300px'
  }
})

<ThemeProvider theme={theme}>
  <Box tm maxWd='site' mgx='auto' pdx> // .css-1
    <Box minWd='card' wd={(1 / 4)}> // .css-2
      <figure>
        <img src="/pic.png" alt="" />
        <figcaption>
          <Box mgb> // .css-3
            <h3>Title</h3>
          </Box>
          <Box mgt> // .css-4
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu libero libero, sit amet commodo sem. Proin a quam vulputate enim consequat sollicitudin.</p>
          </Box>
        </figcaption>
      </figure>
    </Box>
  </Box>
</ThemeProvider>
```

CSS-in-JS result:

```css
.css-1 {
  background-color: #ffffff;
  color: #000000;
  max-width: 1300px; 
  margin-left: auto; 
  margin-right: auto; 
  padding-left: 16px; 
  padding-right: 16px;
  
  @media (max-width: 600px) { 
    padding-left: 8px; 
    padding-right: 8px; 
  }
}

.css-2 {
  min-width: 300px; 
  width: 25%;
}

.css-3 {
  margin-bottom: 16px;
  
  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
}

.css-4 {
  margin-top: 16px;
  
  @media (max-width: 600px) {
    margin-top: 8px;
  }
}
```

---

MIT © [John Grishin](http://johngrish.in)
