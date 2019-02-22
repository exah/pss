/* eslint-env jest */

import {
  createStyles,
  themePath,
  positionOffset,
  space,
  sizes,
  ts,
  ps,
  cs
} from '../..'

import { toStyles } from '../../../test-helpers'

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  space: {
    all: [ 0, 10, 20, 30, 60 ],
    M: [ 0, 5, 10, 20, 20 ]
  },
  myValue: 100
}

describe('propSelector', () => {
  test('add margin-top to &:first-child', () => {
    const result = toStyles(space({
      theme,
      mgt: ps('&:first-child', 1)
    }))

    expect(result).toEqual({
      '&:first-child': {
        marginTop: '10px',
        '@media (max-width: 600px)': {
          marginTop: '5px'
        }
      }
    })
  })

  test('add margin to & + & element on mobile', () => {
    const result = toStyles(space({
      theme,
      mg: { M: ps('& + &', 2) }
    }))

    expect(result).toEqual({
      '@media (max-width: 600px)': {
        '& + &': {
          margin: '10px'
        }
      }
    })
  })
})

describe('themeSelector', () => {
  test('positionOffset', () => {
    const result = toStyles(positionOffset({
      theme,
      top: ts((tm) => tm.myValue),
      bottom: ts(themePath('myValue')),
      left: ts(themePath('noneExistentProp', 5)),
      right: ts(themePath('notPercentage', 1))
    }))

    expect(result).toEqual({
      top: '100px',
      bottom: '100px',
      left: '5px',
      right: '1px'
    })
  })

  test('space', () => {
    const result = toStyles(space({
      theme,
      mg: ts((tm) => tm.myValue),
      mgb: ts(themePath('myValue')),
      mgr: ts(themePath('notPercentage', 1))
    }))

    expect(result).toEqual({
      margin: '100px',
      marginBottom: '100px',
      marginRight: '1px'
    })
  })
})

describe('combineSelectors', () => {
  test('add different top value to &:last-child and &:first-child', () => {
    const result = toStyles(positionOffset({
      theme,
      top: cs(50, ps('&:last-child', 10), ps('&:first-child', 20))
    }))

    expect(result).toEqual({
      top: '50px',
      '&:first-child': {
        top: '20px'
      },
      '&:last-child': {
        top: '10px'
      }
    })
  })

  describe('themeSelector', () => {
    test('rule', () => {
      const result = toStyles(sizes({
        theme,
        height: cs(1),
        width: cs(ts(themePath('______', 1)), ps('& + &', ts(themePath('______', 0.5))))
      }))

      expect(result).toEqual({
        height: '100%',
        width: '1px',
        '& + &': {
          width: '0.5px'
        }
      })
    })

    test('styles', () => {
      const styles = createStyles({
        h: { height: '100vh' },
        w: (input) => ({ width: input })
      })

      const result = toStyles(styles({
        theme,
        h: cs(ts(themePath('______', true)), ps('& + &', ts(themePath('______', true)))),
        w: cs(ts(themePath('______', 1)), ps('& + &', ts(themePath('______', 1))))
      }))

      expect(result).toEqual({
        height: '100vh',
        width: '1px',
        '& + &': {
          height: '100vh',
          width: '1px'
        }
      })
    })
  })
})
