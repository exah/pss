import { createStyles, mediaStyle } from '../..'
import { theme, toStyles } from '../../../test-helpers'

test('return style', () => {
  const style = createStyles({
    hide: mediaStyle({ display: 'none' })
  })

  const expected = {
    '@media (max-width: 600px)': {
      display: 'none'
    }
  }

  expect(toStyles(style({ theme, hide: 'M' }))).toEqual(expected)
  expect(toStyles(style({ theme, hide: { M: true } }))).toEqual(expected)
})

test('multiple media', () => {
  const style = createStyles({
    hide: mediaStyle({ display: 'none' })
  })

  const expected = {
    '@media (max-width: 600px)': {
      display: 'none'
    },
    '@media (min-width: 601px)': {
      display: 'none'
    }
  }

  expect(toStyles(style({ theme, hide: { M: true, D: true } }))).toEqual(expected)
})

test('return nothing', () => {
  const style = createStyles({
    hide: mediaStyle({ display: 'none' })
  })

  expect(toStyles(style({ theme, hide: 'default' }))).toEqual({})
  expect(toStyles(style({ theme, hide: true }))).toEqual({ display: 'none' })
  expect(toStyles(style({ theme, hide: 'wrong' }))).toEqual({})
  expect(toStyles(style({ theme, hide: false }))).toEqual({})
  expect(toStyles(style({ theme, hide: null }))).toEqual({})
})
