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

describe('percentageValue', () => {
  const style = createStyles({
    height: rule('height', percentageValue(boolValue('100%')))
  })

  it('should transform value to 100%', () => {
    const expected = {
      height: '100%'
    }

    expect(toStyles(style({ theme, height: 1 }))).toEqual(expected)
    expect(toStyles(style({ theme, height: '100%' }))).toEqual(expected)
    expect(toStyles(style({ theme, height: true }))).toEqual(expected)
  })
})

describe('sizeValue', () => {
  const style = createStyles({
    height: rule('height', sizeValue())
  })

  it('should transform passed value bigger than `1` to `px`', () => {
    expect(toStyles(style({ theme, height: 100 }))).toEqual({ height: '100px' })
  })

  it('should apply value from `theme.size` and transform it to `px`', () => {
    expect(toStyles(style({ theme, height: 'xl' }))).toEqual({ height: '100px' })
  })

  it('should apply apply different media size from `theme.size`', () => {
    const expected = {
      height: '2px',
      [`@media ${theme.media.sm}`]: {
        height: '1px'
      }
    }

    expect(toStyles(style({ theme, height: 'nudge' }))).toEqual(expected)
    expect(toStyles(style({ theme, height: { all: 2, sm: '1px' } }))).toEqual(expected)
    expect(toStyles(style({ theme, height: { all: 2 } }))).toEqual({ height: '2px' })
  })

  it('should return `0` for `0` and none valid size', () => {
    const expected = {
      height: 0
    }

    expect(toStyles(style({ theme, height: 0 }))).toEqual(expected)
    expect(toStyles(style({ theme, height: 'none' }))).toEqual(expected)
  })

  it('should apply fallback if provided', () => {
    const fallbackStyle = createStyles({
      height: rule('height', sizeValue(boolValue(null, 0)))
    })

    expect(toStyles(fallbackStyle({ theme, height: false }))).toEqual({ height: 0 })
  })
})

describe('spaceValue', () => {
  const style = createStyles({
    m: rule('margin', spaceValue(sizeValue())),
    ml: rule('marginLeft', spaceValue()),
    mr: rule('marginRight', spaceValue()),
    mt: rule('marginTop', spaceValue()),
    mb: rule('marginBottom', spaceValue()),
    mx: [ rule('marginLeft', spaceValue()), rule('marginRight', spaceValue()) ],
    my: [ rule('marginTop', spaceValue()), rule('marginBottom', spaceValue()) ]
  })

  it('should use default scale without theme', () => {
    expect(toStyles(style({ m: 1 }))).toEqual({
      margin: '4px'
    })
  })

  it('should use scale from `theme.space`', () => {
    expect(toStyles(style({ theme, m: 1 }))).toEqual({
      margin: '8px',
      '@media (max-width: 600px)': {
        margin: '4px'
      }
    })
  })

  it('should accept boolean input and use scale from `theme.space`', () => {
    expect(toStyles(style({ theme, m: true }))).toEqual({
      margin: '8px',
      '@media (max-width: 600px)': {
        margin: '4px'
      }
    })
  })

  it('should apply different step in space in specified medias', () => {
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
  })

  describe('should apply values from `theme.size`', () => {
    expect(toStyles(style({ theme, m: 'xl' }))).toEqual({
      margin: '100px'
    })

    expect(toStyles(style({ theme, m: 'nudge' }))).toEqual({
      margin: '2px',
      '@media (max-width: 600px)': {
        margin: '1px'
      }
    })
  })

  describe('should not apply not valid value', () => {
    expect(toStyles(style({ theme, m: 0.5 }))).toEqual({})
  })
})
