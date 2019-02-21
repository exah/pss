import { grid } from '../..'
import { testValue } from '../../../test-helpers'

test('gridAutoFlow', testValue({
  fn: grid,
  prop: 'gridAutoFlow',
  cssProp: 'gridAutoFlow',
  values: [ 'row', 'column', 'dense' ]
}))

test('gridAutoColumns', testValue({
  fn: grid,
  prop: 'gridAutoColumns',
  cssProp: 'gridAutoColumns',
  values: [ 'auto', '1fr', 'min-content' ]
}))

test('gridAutoRows', testValue({
  fn: grid,
  prop: 'gridAutoRows',
  cssProp: 'gridAutoRows',
  values: [ 'auto', '50px', 'min-content' ]
}))

test('gridTemplateColumns', testValue({
  fn: grid,
  prop: 'gridTemplateColumns',
  cssProp: 'gridTemplateColumns',
  values: [ '60px 60px', '1fr 50px', '50px auto' ]
}))

test('gridTemplateAreas', testValue({
  fn: grid,
  prop: 'gridTemplateAreas',
  cssProp: 'gridTemplateAreas',
  values: [ '1 / 1 / 4 / 2' ]
}))
