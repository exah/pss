import { flex } from '../src'
import { toStyles, testValue } from './_helpers'

test('flex', testValue({
  fn: flex,
  prop: 'flex',
  cssProp: 'flex',
  values: [ '1', '1 1', 0, '0', '100', '100px', 'auto' ]
}))

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  size: {
    site: 1000,
    card: {
      all: 200,
      M: 100
    }
  }
}

const mobStyle = (style) => ({ [`@media ${theme.media.M}`]: style })

test('flex (sizes)', () => {
  expect(toStyles(flex({ flex: 1 }))).toEqual({ flex: '1px' })
  expect(toStyles(flex({ flex: 10 }))).toEqual({ flex: '10px' })
  expect(toStyles(flex({ flex: null }))).toEqual({})
  expect(toStyles(flex({ theme, flex: 'site' }))).toEqual({ flex: '1000px' })
  expect(toStyles(flex({ theme, flex: { M: '0' } }))).toEqual(mobStyle({ flex: '0' }))
})
