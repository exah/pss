import { gridItem } from '../src'
import { testValue } from './_helpers'

test('gridColumn', testValue({
  fn: gridItem,
  prop: 'gridColumn',
  cssProp: 'gridColumn',
  values: [ '1', '1 / 3' ]
}))

test('gridRow', testValue({
  fn: gridItem,
  prop: 'gridRow',
  cssProp: 'gridRow',
  values: [ '1', '1 / 3' ]
}))

test('gridArea', testValue({
  fn: gridItem,
  prop: 'gridArea',
  cssProp: 'gridArea',
  values: [ '2 / 1 / 3', 'a' ]
}))
