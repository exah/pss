import { display } from '../src'
import { testValue } from './_helpers'

test('display', testValue({
  fn: display,
  prop: 'display',
  cssProp: 'display',
  values: [ 'block', 'flex', 'grid' ]
}))
