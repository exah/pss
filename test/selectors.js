import test from 'ava'
import { MEDIA_KEY, SPACE_KEY } from '../src/constants'

import {
  createTheme,
  createPropStyles,
  createSpaceProps,
  positionPropStyles,
  ps,
  cs
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
  }
})

const marginPropStyles = createPropStyles(createSpaceProps('margin', 'mg'))

test('add margin-top to &:first-child', (t) => {
  const result = toStyles(marginPropStyles({
    theme,
    mgt: ps('&:first-child', 1)
  }))

  t.deepEqual(result, {
    '&:first-child': [
      {
        marginTop: 10
      },
      {
        '@media (max-width: 600px)': {
          marginTop: 5
        }
      }
    ]
  })
})

test('add margin to & + & element on mobile', (t) => {
  const result = toStyles(marginPropStyles({
    theme,
    mgM: ps('& + &', 2)
  }))

  t.deepEqual(result, {
    '@media (max-width: 600px)': {
      '& + &': {
        margin: 10
      }
    }
  })
})

test('add different top value to &:last-child and &:first-child', (t) => {
  const result = toStyles(positionPropStyles({
    theme,
    prl: true,
    t: cs(50, ps('&:last-child', 10), ps('&:first-child', 20))
  }))

  t.deepEqual(result, {
    position: 'relative',
    top: 50,
    '&:first-child': {
      top: 20
    },
    '&:last-child': {
      top: 10
    }
  })
})
