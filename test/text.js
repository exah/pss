import { text } from '../src'
import { testValue } from './_helpers'

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
