const combine = (...fns) => (...args) => fns.map((fn) => fn(...args))

const floor = (number, precision = 0) => {
  const factor = Math.pow(10, precision)
  return Math.floor(number * factor) / factor
}

export {
  combine,
  floor
}
