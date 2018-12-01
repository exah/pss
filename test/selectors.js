import test from 'ava'
import { MEDIA_KEY, SPACE_KEY } from '../src/constants'

import {
  createPropStyles,
  createSpace,
  position,
  themePath,
  ts,
  ps,
  cs,
  mps
} from '../src'

import { toStyles } from './_helpers'

const theme = {
  [MEDIA_KEY]: {
    D: '(min-width: 1025px)',
    T: '(min-width: 601px) and (max-width: 1024px)',
    M: '(max-width: 600px)'
  },
  [SPACE_KEY]: {
    default: [ 0, 10, 20, 30, 60 ],
    M: [ 0, 5, 10, 20, 20 ]
  },
  myValue: 100
}

const margin = createPropStyles(createSpace('margin', 'mg'))

test('add margin-top to &:first-child', (t) => {
  const result = toStyles(margin({
    theme,
    mgt: ps('&:first-child', 1)
  }))

  t.deepEqual(result, {
    '&:first-child': [
      {
        marginTop: '10px'
      },
      {
        '@media (max-width: 600px)': {
          marginTop: '5px'
        }
      }
    ]
  })
})

test('add margin to & + & element on mobile', (t) => {
  const result = toStyles(margin({
    theme,
    mg: { M: ps('& + &', 2) }
  }))

  t.deepEqual(result, {
    '@media (max-width: 600px)': {
      '& + &': {
        margin: '10px'
      }
    }
  })
})

test('add different top value to &:last-child and &:first-child', (t) => {
  const result = toStyles(position({
    theme,
    position: 'relative',
    top: cs(50, ps('&:last-child', 10), ps('&:first-child', 20))
  }))

  t.deepEqual(result, {
    position: 'relative',
    top: '50px',
    '&:first-child': {
      top: '20px'
    },
    '&:last-child': {
      top: '10px'
    }
  })
})

test('themeSelector → position', (t) => {
  const result = toStyles(position({
    theme,
    top: ts((tm) => tm.myValue),
    bottom: ts(themePath('myValue')),
    left: ts(themePath('noneExistentProp', 5)),
    right: ts(themePath('notPercentage', 1))
  }))

  t.deepEqual(result, {
    top: '100px',
    bottom: '100px',
    left: '5px',
    right: '1px'
  })
})

test('themeSelector → space', (t) => {
  const result = toStyles(margin({
    theme,
    mg: ts((tm) => tm.myValue),
    mgb: ts(themePath('myValue')),
    mgr: ts(themePath('notPercentage', 1))
  }))

  t.deepEqual(result, {
    margin: '100px',
    marginBottom: '100px',
    marginRight: '1px'
  })
})

test('add margin on mobile with mediaPropSelector', (t) => {
  const result = toStyles(margin({
    theme,
    mg: mps('M', 2)
  }))

  t.deepEqual(result, {
    '@media (max-width: 600px)': {
      margin: '10px'
    }
  })
})

test('add margin & + & element on mobile with mediaPropSelector', (t) => {
  const result = toStyles(margin({
    theme,
    mg: mps('M', ps('& + &', 2))
  }))

  t.deepEqual(result, {
    '@media (max-width: 600px)': {
      '& + &': {
        margin: '10px'
      }
    }
  })
})

test('change media query in mediaPropSelector but keep value', (t) => {
  const result = toStyles(margin({
    theme,
    mg: mps([ 'M', '(max-width: 1024px)' ], 2)
  }))

  t.deepEqual(result, {
    '@media (max-width: 1024px)': {
      margin: '10px'
    }
  })
})

test('use mediaPropSelector with combineSelectors', (t) => {
  const result = toStyles(position({
    theme,
    position: cs('relative', mps('M', 'absolute'))
  }))

  t.deepEqual(result, {
    position: 'relative',
    '@media (max-width: 600px)': {
      position: 'absolute'
    }
  })
})
