import { ellipsis } from '../..'
import { toStyles } from '../../../test-helpers'

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
