import test from 'ava'
import { display } from '../src'
import { theme, testValue, toStyles } from './_helpers'

test('display', testValue({
  fn: display,
  prop: 'display',
  cssProp: 'display',
  values: [ 'block', 'flex', 'grid' ],
  trueValue: 'initial',
  falseValue: 'none'
}))

test('hideOn', t => {
  t.deepEqual(
    toStyles(display({ theme, hideOn: { M: true } })),
    { '@media (max-width: 600px)': { display: 'none' } }
  )

  t.deepEqual(
    toStyles(display({ theme, hideOn: 'M' })),
    { '@media (max-width: 600px)': { display: 'none' } }
  )

  t.deepEqual(
    toStyles(display({ theme, hideOn: { M: false } })),
    {}
  )
})
