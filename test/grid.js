import { grid } from '../src'
import { testValue } from './_helpers'

test('gridAutoFlow', testValue({
  fn: grid,
  prop: 'gridAutoFlow',
  cssProp: 'gridAutoFlow',
  values: [ 'row', 'column', 'dense' ]
}))

test('gridAutoCols', testValue({
  fn: grid,
  prop: 'gridAutoCols',
  cssProp: 'gridAutoColumns',
  values: [ 'auto', '1fr', 'min-content' ]
}))

test('gridAutoRows', testValue({
  fn: grid,
  prop: 'gridAutoRows',
  cssProp: 'gridAutoRows',
  values: [ 'auto', '50px', 'min-content' ]
}))

test('gridTemplateCols', testValue({
  fn: grid,
  prop: 'gridTemplateCols',
  cssProp: 'gridTemplateColumns',
  values: [ '60px 60px', '1fr 50px', '50px auto' ]
}))

test('gridTemplateAreas', testValue({
  fn: grid,
  prop: 'gridTemplateAreas',
  cssProp: 'gridTemplateAreas',
  values: [ '1 / 1 / 4 / 2' ]
}))

test('alignContent', testValue({
  fn: grid,
  prop: 'alignContent',
  cssProp: 'alignContent',
  values: [ 'start', 'center', 'space-between' ]
}))

test('justifyContent', testValue({
  fn: grid,
  prop: 'justifyContent',
  cssProp: 'justifyContent',
  values: [ 'start', 'center', 'space-between' ],
  trueValue: 'space-between',
  falseValue: 'normal'
}))

test('alignItems', testValue({
  fn: grid,
  prop: 'alignItems',
  cssProp: 'alignItems',
  values: [ 'start', 'center', 'space-between' ]
}))

test('justifyItems', testValue({
  fn: grid,
  prop: 'justifyItems',
  cssProp: 'justifyItems',
  values: [ 'start', 'center', 'space-between' ]
}))
