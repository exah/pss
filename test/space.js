import test from 'ava'
import { MEDIA_KEY, SPACE_KEY, SIZES_KEY } from '../src/constants'

import {
  createTheme,
  mediaPropStyles,
  spaceProps,
  spaceStyle,
  onMedia
} from '../src'

import { toStyles } from './_helpers'

const theme = createTheme({
  [MEDIA_KEY]: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  },
  [SPACE_KEY]: {
    default: [ 0, 10, 20, 30, 60 ],
    M: [ 0, 5, 10, 20, 20 ]
  },
  [SIZES_KEY]: {
    nudge: {
      default: 2,
      'M': 1
    },
    xl: 100
  }
})

const marginProps = mediaPropStyles(spaceProps('margin', 'mg'))

test('props -> set one step space for every media', (t) => {
  const result = toStyles(marginProps({ theme, mg: 1 }))

  t.deepEqual(result, {
    margin: 10,
    '@media (max-width: 600px)': { margin: 5 }
  })
})

test('props -> set bool space value', (t) => {
  const result = toStyles(marginProps({ theme, mg: true, mgxM: false }))

  t.deepEqual(result, {
    margin: 10,
    '@media (max-width: 600px)': {
      margin: 5,
      marginLeft: 0,
      marginRight: 0
    }
  })
})

test('props -> override one step space on mobile and tablet', (t) => {
  const result = toStyles(marginProps({ theme, mg: 1, mglM: 3, mgxT: 0 }))

  t.deepEqual(result, {
    margin: 10,
    '@media (max-width: 600px)': { margin: 5, marginLeft: 20 },
    '@media (min-width: 601px) and (max-width: 1024px)': {
      marginLeft: 0,
      marginRight: 0
    }
  })
})

test('props -> set margin to sizes responsive "nudge" value', (t) => {
  const result = toStyles(marginProps({ theme, mg: 'nudge' }))

  t.deepEqual(result, {
    margin: 2,
    '@media (max-width: 600px)': { margin: 1 }
  })
})

test('props -> set margin to sizes "xl" value', (t) => {
  const result = toStyles(marginProps({ theme, mg: 'xl' }))

  t.deepEqual(result, {
    margin: 100
  })
})

test('props -> set margin to "auto"', (t) => {
  const result = toStyles(marginProps({ theme, mg: 'auto' }))

  t.deepEqual(result, { margin: 'auto' })
})

test('props -> set margin to "30px" on mobile', (t) => {
  const result = toStyles(marginProps({ theme, mg: '10px', mgM: '30px' }))

  t.deepEqual(result, {
    margin: '10px',
    '@media (max-width: 600px)': { margin: '30px' }
  })
})

test('style -> padding', (t) => {
  const padding = spaceStyle('padding')

  const spaceStep3 = toStyles(padding(3)({ theme }))
  const spaceStep2Y = toStyles(padding.y(2)({ theme }))
  const spaceAutoXOnMobile = toStyles(onMedia('M', padding.x('auto'))({ theme }))

  t.deepEqual(spaceStep3, {
    padding: 30,
    '@media (max-width: 600px)': { padding: 20 }
  })

  t.deepEqual(spaceStep2Y, {
    paddingTop: 20,
    paddingBottom: 20,
    '@media (max-width: 600px)': {
      paddingTop: 10,
      paddingBottom: 10
    }
  })

  t.deepEqual(spaceAutoXOnMobile, {
    '@media (max-width: 600px)': {
      paddingLeft: 'auto',
      paddingRight: 'auto'
    }
  })
})