import _curry2 from './internal/_curry2'
import _map from './internal/_map'
import curryN from './curryN'
import max from './max'
import pluck from './pluck'
import reduce from './reduce'

/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. The arity of the new function is the same as the arity of
 * the longest branching function. When invoked, this new function is applied
 * to some arguments, and each branching function is applied to those same
 * arguments. The results of each branching function are passed as arguments
 * to the converging function to produce the return value.
 *
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after Will be invoked with the return values of `functions` as its arguments
 * @param {Array} funtions
 * @return {Function} A new function
 * @example
 *
 * import { converge } from 'funale'
 *
 * const div = (a, b) => a / b
 * const sum = (a, b) => a + b
 * const length = x => x.length
 * const average = converge(div, [sum, length])
 *
 * average([1, 2, 3, 4, 5, 6, 7]) // 4
 */
const converge = _curry2((after, fns) => {
  return curryN(reduce(max, 0, pluck('length', fns)), (...args) => after.apply(null, _map(fn => fn(...args), fns)))
})
export default converge
