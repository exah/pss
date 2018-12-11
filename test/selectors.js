import test from 'ava'

import {
  space,
  position,
  themePath,
  ts,
  ps,
  cs
} from '../src'

import { toStyles } from './_helpers'

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 10, 20, 30, 60 ],
    M: [ 0, 5, 10, 20, 20 ]
  },
  myValue: 100
}

test('add margin-top to &:first-child', (t) => {
  const result = toStyles(space({
    theme,
    mgt: ps('&:first-child', 1)
  }))

  t.deepEqual(result, {
    '&:first-child': {
      marginTop: '10px',
      '@media (max-width: 600px)': {
        marginTop: '5px'
      }
    }
  })
})

test('add margin to & + & element on mobile', (t) => {
  const result = toStyles(space({
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

test('change media query on M in propSelector but keep value', (t) => {
  const result = toStyles(space({
    theme,
    mg: ps('@media (max-width: 1024px)', 2, 'M')
  }))

  t.deepEqual(result, {
    '@media (max-width: 1024px)': {
      margin: '10px'
    }
  })
})

test('themeSelector: position', (t) => {
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

test('themeSelector: space', (t) => {
  const result = toStyles(space({
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
