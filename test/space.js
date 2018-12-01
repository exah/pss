import test from 'ava'

import {
  createPropStyles,
  createSpace,
  createSpaceMixin,
  styles
} from '../src'

import { toStyles } from './_helpers'

const theme = {
  media: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 10, 20, '3rem', 60 ],
    M: [ 0, 5, 10, '2rem', 20 ]
  },
  size: {
    nudge: {
      default: 2,
      'M': 1
    },
    xl: 100
  }
}

const marginPropStyles = createPropStyles(createSpace('margin', 'mg'))

test('props -> set one step space for every media', (t) => {
  const result = toStyles(marginPropStyles({ theme, mg: 1 }))

  t.deepEqual(result, {
    margin: '10px',
    '@media (max-width: 600px)': { margin: '5px' }
  })
})

test('props -> set bool space value', (t) => {
  const result1 = toStyles(marginPropStyles({ theme, mg: true, mgxM: false }))
  const result2 = toStyles(marginPropStyles({ theme, mg: true, mgx: { M: false } }))

  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': {
      margin: '5px',
      marginLeft: 0,
      marginRight: 0
    }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('props -> override one step space on mobile and tablet', (t) => {
  const result1 = toStyles(marginPropStyles({ theme, mg: 1, mglM: 3, mgxT: 0 }))
  const result2 = toStyles(marginPropStyles({ theme, mg: 1, mgl: { M: 3 }, mgx: { T: 0 } }))

  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': { margin: '5px', marginLeft: '2rem' },
    '@media (min-width: 601px) and (max-width: 1024px)': {
      marginLeft: 0,
      marginRight: 0
    }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('props -> set margin to sizes responsive "nudge" value', (t) => {
  const result = toStyles(marginPropStyles({ theme, mg: 'nudge' }))

  t.deepEqual(result, {
    margin: '2px',
    '@media (max-width: 600px)': { margin: '1px' }
  })
})

test('props -> set margin to sizes "xl" value', (t) => {
  const result = toStyles(marginPropStyles({ theme, mg: 'xl' }))

  t.deepEqual(result, {
    margin: '100px'
  })
})

test('props -> set margin to "auto"', (t) => {
  const result = toStyles(marginPropStyles({ theme, mg: 'auto' }))

  t.deepEqual(result, { margin: 'auto' })
})

test('props -> set margin to "30px" on mobile', (t) => {
  const result1 = toStyles(marginPropStyles({ theme, mg: '10px', mgM: '30px' }))
  const result2 = toStyles(marginPropStyles({ theme, mg: { default: '10px', M: '30px' } }))

  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': { margin: '30px' }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, expected)
})

test('style -> padding', (t) => {
  const padding = createSpaceMixin('padding')

  const spaceStep3 = toStyles(padding(-3)({ theme }))
  const spaceStep2Y = toStyles(padding.y(2)({ theme }))
  const spaceAutoXOnMobile = toStyles(styles.onMedia('M', padding.x('auto'))({ theme }))

  t.deepEqual(spaceStep3, {
    padding: '-3rem',
    '@media (max-width: 600px)': { padding: '-2rem' }
  })

  t.deepEqual(spaceStep2Y, {
    paddingTop: '20px',
    paddingBottom: '20px',
    '@media (max-width: 600px)': {
      paddingTop: '10px',
      paddingBottom: '10px'
    }
  })

  t.deepEqual(spaceAutoXOnMobile, {
    '@media (max-width: 600px)': {
      paddingLeft: 'auto',
      paddingRight: 'auto'
    }
  })
})

test('props -> without theme', (t) => {
  t.deepEqual(toStyles(marginPropStyles({ mg: 1 })), {})
  t.deepEqual(toStyles(marginPropStyles({ mg: 0 })), { margin: 0 })
})
