import {
  boxContentAlignment,
  boxItemsAlignment,
  boxSelfAlignment
} from '../..'

import { testValue } from '../../../test-helpers'

test('alignContent', testValue({
  fn: boxContentAlignment,
  prop: 'alignContent',
  cssProp: 'alignContent',
  values: [ 'center', 'flex-start', 'flex-end' ]
}))

test('justifyContent', testValue({
  fn: boxContentAlignment,
  prop: 'justifyContent',
  cssProp: 'justifyContent',
  values: [ 'center', 'flex-start', 'flex-end' ]
}))

test('alignItems', testValue({
  fn: boxItemsAlignment,
  prop: 'alignItems',
  cssProp: 'alignItems',
  values: [ 'center', 'flex-start', 'flex-end' ]
}))

test('justifyItems', testValue({
  fn: boxItemsAlignment,
  prop: 'justifyItems',
  cssProp: 'justifyItems',
  values: [ 'center', 'flex-start', 'flex-end' ]
}))

test('alignSelf', testValue({
  fn: boxSelfAlignment,
  prop: 'alignSelf',
  cssProp: 'alignSelf',
  values: [ 'center', 'flex-start', 'flex-end' ]
}))

test('justifySelf', testValue({
  fn: boxSelfAlignment,
  prop: 'justifySelf',
  cssProp: 'justifySelf',
  values: [ 'center', 'flex-start', 'flex-end' ]
}))
