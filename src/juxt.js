import _curry1 from './internal/_curry1'
import converge from './converge'

/**
 * Applies a list of functions to a list of values.
 *
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} functions A list of functions
 * @return {Function} A function that returns a list of values
 * @example
 *
 * import { juxt } from 'funale'
 *
 * const getRange = juxt([Math.min, Math.max])
 * getRange(3, 4, -1, 1) // [-1, 4]
 */
const juxt = _curry1(fns => converge((...args) => args, fns))
export default juxt
