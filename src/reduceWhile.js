import _curry4 from './internal/_curry4'
import _reduce from './internal/_reduce'

/**
 * Similar to `reduce`, `reduceWhile` also takes a predicate that is evaluated before each iteration. If
 * the predicate returns `false`, it `short-circuits` the reduce iteration and returns the current value of
 * the accumulator.
 *
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred A predicate function that receives the accumulator and the current value
 * @param {Function} reducer A reducer function that receives the accumulator and the current value
 * @param {*} seed The initial value of the accumulator
 * @param {Array} iterable The iterable to iterate over
 * @return {*} The acumulated value
 * @example
 *
 * import { reduceWhile } from 'funale'
 *
 * const isOdd = (acc, x) => x % 2 === 1
 * const add = (a, b) => a + b
 * const xs = [1, 3, 5, 2, 4, 6]
 *
 * reduceWhile(isOdd, add, 0, xs) // 9
 */
const reduceWhile = _curry4((pred, reducer, seed, iterable) => _reduce((acc, x) => (pred(acc, x) ? reducer(acc, x) : acc), seed, iterable))
export default reduceWhile
