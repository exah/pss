import { createStyles, rule, sizeValue, spaceValue, boolValue, percentageValue } from '../..'
import { toStyles } from '../../../test-helpers'

const theme = {
  media: {
    sm: '(max-width: 600px)'
  },
  space: {
    all: [ 0, 8, 16, 32 ],
    sm: [ 0, 4, 8, 16 ]
  },
  size: {
    nudge: {
      all: 2,
      sm: 1
    },
    xl: 100,
    none: 0
  },
  custom: {
    'my-value': '1000vh'
  }
}

test('percentageValue: 100%', () => {
  const style = createStyles({
    height: rule('height', percentageValue(boolValue('100%')))
  })

  const expected = {
    height: '100%'
  }

  expect(toStyles(style({ theme, height: 1 }))).toEqual(expected)
  expect(toStyles(style({ theme, height: '100%' }))).toEqual(expected)
  expect(toStyles(style({ theme, height: true }))).toEqual(expected)
})

test('sizeValue: sizes.xl', () => {
  const style = createStyles({
    height: rule('height', sizeValue())
  })

  const expected = {
    height: '100px'
  }

  expect(toStyles(style({ theme, height: 100 }))).toEqual(expected)
  expect(toStyles(style({ theme, height: 'xl' }))).toEqual(expected)
})

test('sizeValue: sizes.nudge', () => {
  const style = createStyles({
    height: rule('height', sizeValue())
  })

  const expected = {
    height: '2px',
    [`@media ${theme.media.sm}`]: {
      height: '1px'
    }
  }

  expect(toStyles(style({ theme, height: 'nudge' }))).toEqual(expected)
  expect(toStyles(style({ theme, height: { all: 2, sm: '1px' } }))).toEqual(expected)
})

test('sizeValue: 0', () => {
  const style = createStyles({
    height: rule('height', sizeValue(boolValue(null, 0)))
  })

  const expected = {
    height: 0
  }

  expect(toStyles(style({ theme, height: 0 }))).toEqual(expected)
  expect(toStyles(style({ theme, height: false }))).toEqual(expected)
  expect(toStyles(style({ theme, height: 'none' }))).toEqual(expected)
})

test('spaceValue', () => {
  const style = createStyles({
    m: rule('margin', spaceValue(sizeValue())),
    ml: rule('marginLeft', spaceValue()),
    mr: rule('marginRight', spaceValue()),
    mt: rule('marginTop', spaceValue()),
    mb: rule('marginBottom', spaceValue()),
    mx: [ rule('marginLeft', spaceValue()), rule('marginRight', spaceValue()) ],
    my: [ rule('marginTop', spaceValue()), rule('marginBottom', spaceValue()) ]
  })

  expect(toStyles(style({ theme, m: 1 }))).toEqual({
    margin: '8px',
    '@media (max-width: 600px)': {
      margin: '4px'
    }
  })

  expect(toStyles(style({ theme, m: { all: 2, sm: 1 } }))).toEqual({
    margin: '16px',
    '@media (max-width: 600px)': {
      margin: '4px'
    }
  })

  expect(toStyles(style({ theme, mx: { all: 2, sm: 1 }, my: 3 }))).toEqual({
    marginTop: '32px',
    marginBottom: '32px',
    marginLeft: '16px',
    marginRight: '16px',
    '@media (max-width: 600px)': {
      marginTop: '16px',
      marginBottom: '16px',
      marginLeft: '4px',
      marginRight: '4px'
    }
  })

  expect(toStyles(style({ theme, m: { sm: 1 } }))).toEqual({
    '@media (max-width: 600px)': {
      margin: '4px'
    }
  })

  expect(toStyles(style({ theme, m: { all: 2 } }))).toEqual({
    margin: '16px'
  })

  expect(toStyles(style({ theme, m: 'xl' }))).toEqual({
    margin: '100px'
  })

  expect(toStyles(style({ theme, m: 'nudge' }))).toEqual({
    margin: '2px',
    '@media (max-width: 600px)': {
      margin: '1px'
    }
  })

  expect(toStyles(style({ theme, m: 0.5 }))).toEqual({})
})
