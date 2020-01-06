import _curry3 from './internal/_curry3'
import _isNumber from './internal/_isNumber'

/**
 * Generate a list of numbers from `from` (inclusive) to `to` (exclusive) with `step`.
 *
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list
 * @param {Number} to One more than the last number in the list
 * @param {Number} step The step to generate numbers
 * @return {Array} The list of numbers in the set `[a, b)`
 * @example
 *
 * import { range } from 'funale'
 *
 * range(1, 5, 1) // [1, 2, 3, 4]
 * range(1, 5, 2) // [1, 3]
 * range(1, -3, -1) // [1, 0, -1, -2]
 */
const range = _curry3((from, to, step) => {
  if (!(_isNumber(from) && _isNumber(to) && _isNumber(step))) {
    throw new TypeError('all arguments to range must be numbers')
  }
  const rv = []
  let n = from

  if (step === 0) {
    throw new Error('step value to range must be non-zero')
  } else if (step > 0) {
    while (n < to) {
      rv.push(n)
      n += step
    }
  } else {
    while (n > to) {
      rv.push(n)
      n += step
    }
  }

  return rv
})
export default range
