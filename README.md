# 💔 prop-styles-system (WIP)

> Props based system for styled components (glamorous, emotion)

## Install

```
$ yarn add @exah/prop-styles-system
```

## Usage

1. Create prop styles

  ```js
  import { mediaPropStyles, sizeProp } from '@exah/prop-styles-system' 

  const helperProps = mediaPropStyles({
    ht: sizeProp('height'),
    wd: sizeProp('width'),
    hide: { display: 'none' }
  })
  ```

2. Add to styled component 

  ```js
  import styled from 'react-emotion'
  import { helperProps } from './props'

  const Box = styled.div(helperProps)
  ```

3. Add css with props (+ change on values on mobile and tablet)

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
  
4. Expected output
  
  ```css
  .css-hash {
    height: 50%;
    @media (min-width: 601px) and (max-width: 1024px) {
      height: 300px;
      width: 100%;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
  ```


---

MIT © [John Grishin](http://johngrish.in)
