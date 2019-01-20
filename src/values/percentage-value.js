import { isNum, identity } from '@exah/utils'
import { px } from '../utils'

const percentage = (n) => (n > 0 && n <= 1) ? `${n * 100}%` : n

export function createPercentageValue ({ transformValue = identity } = {}) {
  return (defaultValue) => (input) =>
    isNum(input) ? transformValue(percentage(input)) : defaultValue
}

export const percentageValue = createPercentageValue({
  transformValue: px
})
