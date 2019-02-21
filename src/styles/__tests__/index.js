import {
  boxContentAlignment,
  boxItemsAlignment,
  boxSelfAlignment,
  cursor,
  display,
  flexBox,
  float,
  grid,
  gridItem,
  opacity,
  order,
  outline,
  radius,
  text,
  transform,
  transition,
  zIndex
} from '../..'

import { toStyles, testValue } from '../../../test-helpers'

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

test('display', testValue({
  fn: display,
  prop: 'display',
  cssProp: 'display',
  values: [ 'block', 'flex', 'grid' ]
}))

test('cursor', testValue({
  fn: cursor,
  prop: 'cursor',
  cssProp: 'cursor',
  values: [ 'pointer' ]
}))

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

test('opacity', testValue({
  fn: opacity,
  prop: 'opacity',
  cssProp: 'opacity',
  values: [ 0.5 ]
}))

test('radius', testValue({
  fn: radius,
  prop: 'radius',
  cssProp: 'borderRadius',
  values: [ '9999px' ]
}))

test('transform', testValue({
  fn: transform,
  prop: 'transform',
  cssProp: 'transform',
  values: [ 'scale(2)' ]
}))

test('transition', testValue({
  fn: transition,
  prop: 'transition',
  cssProp: 'transition',
  values: [ 'any', 'none' ]
}))

describe('outline', () => {
  test('values', testValue({
    fn: outline,
    prop: 'outline',
    cssProp: 'outline',
    values: [ '1px solid red', 'none' ]
  }))

  test('debug', () => {
    expect(toStyles(outline({ outline: 'debug' })).outline.indexOf('1px solid')).toBe(0)
  })
})

test('zIndex', testValue({
  fn: zIndex,
  prop: 'zIndex',
  cssProp: 'zIndex',
  values: [ 1, 100, 300 ]
}))

test('fontFamily', testValue({
  fn: text,
  prop: 'fontFamily',
  cssProp: 'fontFamily',
  value: [ 'system-ui', 'sans-serif' ]
}))

test('fontSize', testValue({
  fn: text,
  prop: 'fontSize',
  cssProp: 'fontSize',
  value: [ 16, '10rem' ]
}))

test('fontWeight', testValue({
  fn: text,
  prop: 'fontWeight',
  cssProp: 'fontWeight',
  value: [ 300, 'bold', 'normal' ]
}))

test('lineHeight', testValue({
  fn: text,
  prop: 'lineHeight',
  cssProp: 'lineHeight',
  value: [ 1, '1.5em', 0 ]
}))

test('letterSpacing', testValue({
  fn: text,
  prop: 'letterSpacing',
  cssProp: 'letterSpacing',
  value: [ 0.15, '0.5em' ]
}))

test('textAlign', testValue({
  fn: text,
  prop: 'textAlign',
  cssProp: 'textAlign',
  value: [ 'left', 'center', 'right', 'justify' ]
}))

test('whiteSpace', testValue({
  fn: text,
  prop: 'whiteSpace',
  cssProp: 'whiteSpace',
  value: [ 'normal', 'nowrap', 'pre' ]
}))

test('order', testValue({
  fn: order,
  prop: 'order',
  cssProp: 'order',
  values: [ 1, 0, 100 ]
}))

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
