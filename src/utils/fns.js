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

export {
  noop,
  fallbackTo,
  identity,
  combine,
  once,
  curry,
  curryN
}
