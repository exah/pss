const noop = () => null
const identity = (val) => val

const fallbackTo = (...args) =>
  args.reduce((prev, val) => prev == null ? val : prev, null)

const curry = (fn, ...args) => (
  args.length === fn.length
    ? fn(...args)
    : curry.bind(null, fn, ...args)
)

const curryN = (numOfArgs, fn, ...args) => (
  args.length >= numOfArgs
    ? fn(...args)
    : curryN.bind(null, numOfArgs, fn, ...args)
)

const once = (fn) => {
  let state = false
  let result = null

  return (...args) => {
    if (state === false) {
      result = fn(...args)
      state = true
    }

    return result
  }
}

const combine = (...fns) => (...args) => fns.map((fn) => fn(...args))

const floor = (number, precision = 0) => {
  const factor = Math.pow(10, precision)
  return Math.floor(number * factor) / factor
}

export {
  noop,
  fallbackTo,
  identity,
  combine,
  floor,
  once,
  curry,
  curryN
}
