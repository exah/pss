import { combine } from '../utils'
import { outline } from './outline'
import { opacity } from './opacity'
import { radius } from './radius'
import { cursor } from './cursor'
import { transition } from './transition'
import { transform } from './transform'

export const utility = combine(
  outline,
  opacity,
  radius,
  cursor,
  transition,
  transform
)
