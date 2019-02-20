import { order } from '../src'
import { testValue } from './_helpers'

test('order', testValue({
  fn: order,
  prop: 'order',
  cssProp: 'order',
  values: [ 1, 0, 100 ]
}))
