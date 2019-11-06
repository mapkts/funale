import _curry1 from './internal/_curry1'
import curryN from './curryN'

/**
 * Returns a curried version of the provided function.
 *
 * @sig ((a, b, ...) -> c) -> a -> b -> ... -> c
 * @param {Function} fn The function to curry
 * @return {Function} A curried function
 * @example
 *
 * import { curry } from 'funale'
 *
 * const sum = (a, b) => a + b
 * const inc = curry(sum)(1)
 * inc(2) // 3
 */
const curry = _curry1(fn => curryN(fn.length, fn))
export default curry
