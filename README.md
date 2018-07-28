# PSS - Prop Styles System

> Design system utils for CSS-in-JS libraries


- [x] Support [`emotion`](https://emotion.sh), [`styled-components`](https://www.styled-components.com) and [`glamorous`](https://glamorous.rocks)
- [x] All styles are responsive by default
- [x] Customizable


## 📦 Install

```
$ yarn add pss
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

With `pss` you can add `media` queries to your `theme` and any created **Prop Style** than can be changed in specified media queries with special suffix.

```js
import { createPropStyles, createTheme } from 'pss'

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

[![Edit prop-styles-system-demo-1](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zlrwm3ymzx)

Add ready to use

- [`space`](./docs/api.md#space) — for setting `margin`, `padding`
- [`sizes`](./docs/api.md#sizes) - for `width`, `height`, ...
- [`colors`](./docs/api.md#colors) — for `color`, `background-color` 

prop styles to your component.

```js
import styled from 'react-emotion'
import { space, sizes, colors } from 'pss'

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
import { createTheme } from 'pss' 

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
  },
  palette: {
    default: {
      bg: '#ffffff',
      fg: '#000000'
    },
    inverted: {
      bg: '#000000',
      fg: '#ffffff'
    }
  }
})

<ThemeProvider theme={theme}>
  <Box bg="inverted" ht> // css-0
    <Box maxWd="site" mgx="auto" pdx> // css-1
      <Box tm wd={1 / 4} minWd="card" minWdM> // css-2
        <figure>
          <img src="/pic.jpg" alt="" />
          <figcaption>
            <Box pdx pdy={2}> // css-3
              <Box mgb> // css-4
                <h3>
                  Title
                </h3>
              </Box>
              <Box mgt> // css-5
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam eu libero libero, sit amet commodo sem. Proin a quam
                  vulputate enim consequat sollicitudin.
                </p>
              </Box>
            </Box>
          </figcaption>
        </figure>
      </Box>
    </Box>
  </Box>
</ThemeProvider>

```

CSS-in-JS result:

```css

.css-0 {
  background-color: #000000;
}

.css-1 {
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
  background-color: #ffffff;
  color: #000000;
  width: 25%;
  min-width: 300px;
  
  @media (max-width: 600px) { 
    min-width: 100%;
  }
}

.css-3 {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  
  @media (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
}

.css-4 {
  margin-bottom: 16px;
  
  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
}

.css-5 {
  margin-top: 16px;
  
  @media (max-width: 600px) {
    margin-top: 8px;
  }
}
```

## 🔗 Links

### Sites

- [strelkamag.com](http://strelkamag.com) — 🌍 Real-world usage
- [goremykina](https://github.com/exah/goremykina) — 👀 Code (WIP)


### Packages

- [`defaults.css`](https://github.com/exah/defaults.css) — CSS reset
- [`styled-system`](https://github.com/jxnblk/styled-system) — "Design system utilities for styled-components and other css-in-js libraries." Similiar project and probably better.
- [`prop-styles`](https://github.com/peterschussheim/prop-styles) — "Utility to create flexible React components which accept props to enable/disable certain styles."
- [`polished`](https://github.com/styled-components/polished) — "A lightweight toolset for writing styles in JavaScript"


---

MIT © [John Grishin](http://johngrish.in)
