import { css } from '@emotion/core'

const Link = css`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Button = css`
  border-radius: 5px;
  padding: 10px 20px;
`

const Input = css`
  padding: 10px 20px;
`

export const theme = {
  media: {
    sm: '(max-width: 600px)',
    md: '(min-width: 601px) and (max-width: 1024px)',
    lg: '(min-width: 1025px)'
  },
  space: [ 0, 8, 16, 32, 64, 128 ],
  size: {
    large: 128,
    medium: 56,
    small: 42
  },
  color: {
    black: '#000',
    grey: [ '#eee', '#ddd', '#ccc', '#bbb', '#aaa', '#555' ],
    white: '#fff'
  },
  palette: {
    default: {
      bg: '#fff',
      fg: '#000',
      link: 'royalblue',
      primary: '#ff0',
      positive: '#0f0',
      negative: '#f00'
    },
    grey: {
      bg: '#eee',
      fg: '#000'
    },
    inverted: {
      bg: '#000',
      fg: '#fff'
    }
  },
  fontFamily: {
    default: 'system-ui, sans-serif',
    'system-ui': [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen-Sans',
      'Ubuntu',
      'Cantarell',
      'Helvetica Neue',
      'sans-serif',
    ].join(),
    serif: 'Times New Roman, serif'
  },
  textStyle: {
    root: {
      fontFamily: 'Helvetica, system-ui, sans-serif',
      fontSize: 16,
      lineHeight: 1.2
    },
    default: {
      fontFamily: 'Helvetica, system-ui, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.2
    },
    heading: {
      fontFamily: 'athelas, georgia, times, serif',
      fontSize: '2.5rem',
      fontWeight: 'bold'
    },
    responsive: {
      all: {
        fontSize: '1rem'
      },
      lg: {
        fontSize: '2rem'
      },
      md: {
        fontSize: '1.5rem'
      }
    }
  },
  Link,
  Button,
  buttonStyle: {
    default: {
      background: 'royalblue',
      color: 'white'
    },
    danger: {
      background: 'red',
      color: 'white'
    },
    success: {
      background: 'lime',
      color: 'white'
    },
    inverted: {
      background: 'white',
      color: 'black',
    }
  },
  Input,
  inputStyle: {
    default: {
      color: 'white',
      background: '#2e3440',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    underline: {
      color: 'white',
      padding: '10px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    },
    inverted: {
      color: 'black',
      background: 'white',
      border: '1px solid lime',
    },
  },
  gridStyle: {
    'default': {
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: '1rem'
    },
    '16cols': {
      gridTemplateColumns: 'repeat(16, 1fr)',
      gridGap: '0.5rem'
    },
    'page-layout': {
      gridTemplate: `
       "head head" 30px
       "nav  main" 1fr
       "nav  foot" 30px / 120px 1fr
     `
    }
  }
}
