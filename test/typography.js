import test from 'ava'
import { typography } from '../src/styles/typography'
import { textStyle } from '../src/styles/text-style'
import { toStyles } from './_helpers'

const theme = {
  default: {
    fontFamily: 'ui'
  },
  media: {
    M: '(max-width: 600px)'
  },
  fontFamily: {
    heading: 'Times New Roman, serif',
    ui: 'Helivetica, system-ui',
    responsive: {
      M: 'Times New Roman, serif'
    }
  },
  textStyle: {
    heading: {
      fontSize: 32,
      lineHeight: 1.1,
      fontWeight: 'bold'
    },
    responsive: {
      all: {
        fontSize: 16
      },
      M: {
        fontSize: 12
      }
    }
  }
}

test('defaults', (t) => {
  const result = toStyles(typography({
    theme,
    fontFamily: true,
    fontSize: true,
    lineHeight: true,
    letterSpacing: true
  }))

  t.deepEqual(result, {
    fontFamily: 'Helivetica, system-ui',
    fontSize: '1rem',
    lineHeight: 'normal',
    letterSpacing: 'normal'
  })
})

test('text helpers', (t) => {
  const result = toStyles(typography({
    theme,
    fontFamily: 'heading',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  }))

  t.deepEqual(result, {
    fontFamily: 'Times New Roman, serif',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  })
})

test('text style', (t) => {
  const result = toStyles(textStyle({
    theme,
    textStyle: 'heading'
  }))

  t.deepEqual(result, {
    fontSize: 32,
    lineHeight: 1.1,
    fontWeight: 'bold'
  })
})

test('ellipsis', (t) => {
  const result = toStyles(typography({
    theme,
    ellipsis: true
  }))

  t.deepEqual(result, {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })
})

test('responsive textStyle', (t) => {
  const result = toStyles(typography({
    theme,
    textStyle: 'responsive'
  }))

  t.deepEqual(result, {
    fontSize: 16,
    '@media (max-width: 600px)': {
      fontSize: 12
    }
  })
})

test('responsive fontFamily', (t) => {
  const result = toStyles(typography({
    theme,
    fontFamily: 'responsive'
  }))

  t.deepEqual(result, {
    '@media (max-width: 600px)': {
      fontFamily: 'Times New Roman, serif'
    }
  })
})
