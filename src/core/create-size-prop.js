import { curryN } from 'ramda'
import { getSize } from '../utils'

const createSizeProp = (cssProp, trueVal, falseVal) => curryN(2, (val, { theme }) => {
  const size = getSize(theme, val, trueVal, falseVal)
  if (size == null) return {}
  return {
    [cssProp]: size
  }
})

const sizeStyle = curryN(3, (cssProp, val, { theme }) =>
  createSizeProp(cssProp)(val, { theme })
)

export { sizeStyle, createSizeProp }
