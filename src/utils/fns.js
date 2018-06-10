const noop = () => null
const identity = (val) => val

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

export {
  noop,
  identity,
  once,
  curry,
  curryN
}
