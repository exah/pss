import { order } from '../..'
import { testValue } from '../../../test-helpers'

test('order', testValue({
  fn: order,
  prop: 'order',
  cssProp: 'order',
  values: [ 1, 0, 100 ]
}))
