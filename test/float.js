import { float } from '../src'
import { testValue } from './_helpers'

test('float', testValue({
  fn: float,
  prop: 'float',
  cssProp: 'float',
  values: [ 'left', 'right', 'none' ]
}))

test('clear', testValue({
  fn: float,
  prop: 'clear',
  cssProp: 'clear',
  values: [ 'left', 'right', 'none', 'both' ]
}))
