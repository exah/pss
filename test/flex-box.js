import { flexBox } from '../src'
import { testValue } from './_helpers'

test('flexWrap', testValue({
  fn: flexBox,
  prop: 'flexWrap',
  cssProp: 'flexWrap',
  values: [ 'wrap', 'nowrap', 'wrap-reverse' ]
}))

test('flexDirection', testValue({
  fn: flexBox,
  prop: 'flexDirection',
  cssProp: 'flexDirection',
  values: [ 'column', 'column-reverse', 'row', 'row-reverse' ]
}))
