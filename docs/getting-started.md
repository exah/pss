# Getting started

[![Edit prop-styles-system-demo-1](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zlrwm3ymzx)

1. Import prop styles to your components

  - [`space`](./api.md#space) — for setting `margin`, `padding`
  - [`sizes`](./api.md#sizes) - for `width`, `height`, ...
  - [`colors`](./api.md#colors) — for `color`, `background-color` 
    
    
    
```js
import styled from 'react-emotion'
import { space, sizes, colors } from 'pss'

const Box = styled.div(
  space,
  sizes,
  colors
)
```
    

2. Use them in runtime with custom theme:

```js
import { ThemeProvider } from 'emotion-theming'

const theme = {
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
}

<ThemeProvider theme={theme}>
  <Box bg="inverted" height> // css-0
    <Box maxWidth="site" mgx="auto" pdx> // css-1
      <Box tm width={1 / 4} minWidth="card" minWidthM> // css-2
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
