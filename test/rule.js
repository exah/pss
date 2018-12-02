import test from 'ava'
import { createPropStyles, rule, sizeValue, spaceValue } from '../src'
import { toStyles } from './_helpers'

const theme = {
  media: {
    sm: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 8, 16, 32 ],
    sm: [ 0, 4, 8, 16 ]
  },
  size: {
    nudge: {
      default: 2,
      sm: 1
    },
    xl: 100,
    none: 0
  },
  custom: {
    'my-value': '1000vh'
  }
}

test('sizeValue: 100%', (t) => {
  const style = createPropStyles({
    height: rule('height', sizeValue())
  })

  const expected = {
    height: '100%'
  }

  t.deepEqual(toStyles(style({ theme, height: 1 })), expected)
  t.deepEqual(toStyles(style({ theme, height: '100%' })), expected)
  t.deepEqual(toStyles(style({ theme, height: true })), expected)
})

test('sizeValue: sizes.xl', (t) => {
  const style = createPropStyles({
    height: rule('height', sizeValue())
  })

  const expected = {
    height: '100px'
  }

  t.deepEqual(toStyles(style({ theme, height: 100 })), expected)
  t.deepEqual(toStyles(style({ theme, height: 'xl' })), expected)
})

test('sizeValue: sizes.nudge', (t) => {
  const style = createPropStyles({
    height: rule('height', sizeValue())
  })

  const expected = {
    height: '2px',
    [`@media ${theme.media.sm}`]: {
      height: '1px'
    }
  }

  t.deepEqual(toStyles(style({ theme, height: 'nudge' })), expected)
  t.deepEqual(toStyles(style({ theme, height: { all: 2, sm: '1px' } })), expected)
})

test('sizeValue: 0', (t) => {
  const style = createPropStyles({
    height: rule('height', sizeValue())
  })

  const expected = {
    height: 0
  }

  t.deepEqual(toStyles(style({ theme, height: 0 })), expected)
  t.deepEqual(toStyles(style({ theme, height: false })), expected)
  t.deepEqual(toStyles(style({ theme, height: 'none' })), expected)
})

test('sizeValue: custom.my-value', (t) => {
  const style = createPropStyles({
    height: rule('height', sizeValue())
  })

  const expected = {
    height: '1000vh'
  }

  t.deepEqual(toStyles(style({ theme, height: 'custom.my-value' })), expected)
})

test('spaceValue', (t) => {
  const style = createPropStyles({
    mg: rule('margin', spaceValue()),
    mgl: rule('marginLeft', spaceValue()),
    mgr: rule('marginRight', spaceValue()),
    mgt: rule('marginTop', spaceValue()),
    mgb: rule('marginBottom', spaceValue()),
    mgx: [ rule('marginLeft', spaceValue()), rule('marginRight', spaceValue()) ],
    mgy: [ rule('marginTop', spaceValue()), rule('marginBottom', spaceValue()) ]
  })

  t.deepEqual(toStyles(style({ theme, mg: 1 })), {
    margin: '8px',
    '@media (max-width: 600px)': {
      margin: '4px'
    }
  })

  t.deepEqual(toStyles(style({ theme, mg: { all: 2, sm: 1 } })), {
    margin: '16px',
    '@media (max-width: 600px)': {
      margin: '4px'
    }
  })

  t.deepEqual(toStyles(style({ theme, mgx: { all: 2, sm: 1 }, mgy: 3 })), {
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

  t.deepEqual(toStyles(style({ theme, mg: { sm: 1 } })), {
    '@media (max-width: 600px)': {
      margin: '4px'
    }
  })

  t.deepEqual(toStyles(style({ theme, mg: { default: 2 } })), {
    margin: '16px'
  })

  t.deepEqual(toStyles(style({ theme, mg: 'xl' })), {
    margin: '100px'
  })

  t.deepEqual(toStyles(style({ theme, mg: 'nudge' })), {
    margin: '2px',
    '@media (max-width: 600px)': {
      margin: '1px'
    }
  })

  t.deepEqual(toStyles(style({ theme, mg: 0.5 })), {})
})
