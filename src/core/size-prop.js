import { curryN } from 'ramda'
import { getSize } from '../utils'

const sizeProp = (cssProp, trueVal, falseVal) => curryN(2, (val, { theme }) => {
  const size = getSize(theme, val, trueVal, falseVal)
  if (size == null) return {}
  return {
    [cssProp]: size
  }
})

const sizeStyle = curryN(3, (cssProp, val, { theme }) =>
  sizeProp(cssProp)(val, { theme })
)

export { sizeStyle, sizeProp }
