import { flex } from '../src'
import { testValue } from './_helpers'

test('flexWrap', testValue({
  fn: flex,
  prop: 'flexWrap',
  cssProp: 'flexWrap',
  values: [ 'wrap', 'nowrap', 'wrap-reverse' ],
  trueValue: 'wrap',
  falseValue: 'nowrap'
}))

test('flexDirection', testValue({
  fn: flex,
  prop: 'flexDirection',
  cssProp: 'flexDirection',
  values: [ 'column', 'column-reverse', 'row', 'row-reverse' ]
}))

test('alignItems', testValue({
  fn: flex,
  prop: 'alignItems',
  cssProp: 'alignItems',
  values: [ 'center', 'flex-start', 'flex-end' ]
}))

test('alignContent', testValue({
  fn: flex,
  prop: 'alignContent',
  cssProp: 'alignContent',
  values: [ 'center', 'flex-start', 'flex-end' ]
}))

test('justifyContent', testValue({
  fn: flex,
  prop: 'justifyContent',
  cssProp: 'justifyContent',
  values: [ 'center', 'flex-start', 'flex-end' ],
  trueValue: 'space-between',
  falseValue: 'normal'
}))
