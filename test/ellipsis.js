import { ellipsis } from '../src'
import { toStyles } from './_helpers'

test('ellipsis', () => {
  const result = toStyles(ellipsis({
    ellipsis: true
  }))

  expect(result).toEqual({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })
})
