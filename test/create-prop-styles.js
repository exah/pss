import pss from '../src'
import { toStyles } from './_helpers'

const theme = {
  media: {
    sm: '(max-width: 600px)'
  }
}

const example = pss({
  display: value => ({ display: value }),
  flex: { display: 'flex' },
  inline: { display: 'inline-block' },
  hide: { display: 'none' },
  size: (value, props, mediaKey) => ({
    width: mediaKey === 'sm' && value === true ? '100%' : value
  })
})

test('docs/api @example', () => {
  expect(toStyles(example({ display: 'inline-flex' }))).toEqual({ display: 'inline-flex' })
  expect(toStyles(example({ flex: true }))).toEqual({ display: 'flex' })
  expect(toStyles(example({ inline: true }))).toEqual({ display: 'inline-block' })
  expect(toStyles(example({ size: '500px' }))).toEqual({ width: '500px' })
})

test('docs/api @example (with theme)', () => {
  expect(toStyles(example({ theme, display: 'flex', hide: { sm: true } }))).toEqual({
    display: 'flex',
    '@media (max-width: 600px)': {
      display: 'none'
    }
  })

  expect(toStyles(example({ theme, size: { all: '500px', sm: true } }))).toEqual({
    width: '500px',
    '@media (max-width: 600px)': {
      width: '100%'
    }
  })
})
