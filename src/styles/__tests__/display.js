import { display } from '../..'
import { testValue } from '../../../test-helpers'

test('display', testValue({
  fn: display,
  prop: 'display',
  cssProp: 'display',
  values: [ 'block', 'flex', 'grid' ]
}))
