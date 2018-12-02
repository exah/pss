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

test('set one step space for every media', (t) => {
  t.deepEqual(toStyles(marginPropStyles({ theme, mg: 1 })), {
    margin: '10px',
    '@media (max-width: 600px)': { margin: '5px' }
  })
})

test('set bool space value', (t) => {
  t.deepEqual(
    toStyles(marginPropStyles({ theme, mg: true, mgx: { M: false } })),
    {
      margin: '10px',
      '@media (max-width: 600px)': {
        margin: '5px',
        marginLeft: 0,
        marginRight: 0
      }
    }
  )
})

test('override one step space on mobile and tablet', (t) => {
  t.deepEqual(
    toStyles(marginPropStyles({ theme, mg: 1, mgl: { M: 3 }, mgx: { T: 0 } })),
    {
      margin: '10px',
      '@media (max-width: 600px)': { margin: '5px', marginLeft: '2rem' },
      '@media (min-width: 601px) and (max-width: 1024px)': {
        marginLeft: 0,
        marginRight: 0
      }
    }
  )
})

test('set margin to sizes responsive "nudge" value', (t) => {
  const result = toStyles(marginPropStyles({ theme, mg: 'nudge' }))

  t.deepEqual(result, {
    margin: '2px',
    '@media (max-width: 600px)': { margin: '1px' }
  })
})

test('set margin to sizes "xl" value', (t) => {
  t.deepEqual(toStyles(marginPropStyles({ theme, mg: 'xl' })), {
    margin: '100px'
  })
})

test('set margin to "auto"', (t) => {
  t.deepEqual(toStyles(marginPropStyles({ theme, mg: 'auto' })), {
    margin: 'auto'
  })
})

test('set margin to "30px" on mobile', (t) => {
  const expected = {
    margin: '10px',
    '@media (max-width: 600px)': { margin: '30px' }
  }

  t.deepEqual(toStyles(marginPropStyles({ theme, mg: { all: '10px', M: '30px' } })), expected)
})

test('without theme', (t) => {
  t.deepEqual(toStyles(marginPropStyles({ mg: 1 })), {})
  t.deepEqual(toStyles(marginPropStyles({ mg: 0 })), { margin: 0 })
})

test('style -> padding', (t) => {
  const padding = createSpaceMixin('padding')

  t.deepEqual(toStyles(padding(-3)({ theme })), {
    padding: '-3rem',
    '@media (max-width: 600px)': { padding: '-2rem' }
  })

  t.deepEqual(toStyles(padding.y(2)({ theme })), {
    paddingTop: '20px',
    paddingBottom: '20px',
    '@media (max-width: 600px)': {
      paddingTop: '10px',
      paddingBottom: '10px'
    }
  })

  t.deepEqual(toStyles(styles.onMedia('M', padding.x('auto'))({ theme })), {
    '@media (max-width: 600px)': {
      paddingLeft: 'auto',
      paddingRight: 'auto'
    }
  })
})
