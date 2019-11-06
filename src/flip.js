import _curry1 from './internal/_curry1'
import curryN from './curryN'

/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to reverse first two arguments
 * @param {Function} fn A curried function with its first two arguments reversed
 * @example
 *
 * import { flip } from 'funale'
 *
 * const mergeThree = (a, b, c) => [].concat(a, b, c)
 * mergeThree(1, 2, 3) // [1, 2, 3]
 * flip(mergeThree)(1, 2, 3) // [2, 1, 3]
 */
const flip = _curry1(fn => curryN(fn.length, (a, b, ...args) => fn(b, a, ...args)))
export default flip

