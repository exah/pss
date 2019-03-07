import { textOverflow } from '../..'
import { toStyles } from '../../../test-helpers'

test('textOverflow', () => {
  const result = toStyles(textOverflow({
    textOverflow: 'ellipsis'
  }))

  expect(result).toEqual({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })
})
