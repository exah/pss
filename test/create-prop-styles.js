import test from 'ava'
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

test('docs/api @example', (t) => {
  t.deepEqual(toStyles(example({ display: 'inline-flex' })), { display: 'inline-flex' })
  t.deepEqual(toStyles(example({ flex: true })), { display: 'flex' })
  t.deepEqual(toStyles(example({ inline: true })), { display: 'inline-block' })
  t.deepEqual(toStyles(example({ size: '500px' })), { width: '500px' })
})

test('docs/api @example (with theme)', (t) => {
  t.deepEqual(toStyles(example({ theme, display: 'flex', hide: { sm: true } })), {
    display: 'flex',
    '@media (max-width: 600px)': {
      display: 'none'
    }
  })

  t.deepEqual(toStyles(example({ theme, size: { all: '500px', sm: true } })), {
    width: '500px',
    '@media (max-width: 600px)': {
      width: '100%'
    }
  })
})
