import _curry2 from './internal/_curry2'
import _reduce from './internal/_reduce'
import ap from './ap'
import curryN from './curryN'
import map from './map'

/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the y).
 *
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Number} arity
 * @param {Function} fn The function to lift
 * @return {Function} The lifted function
 * @example
 *
 * import { liftN, sum } from 'funale'
 *
 * const madd3 = liftN(3, sum)
 * madd3([1,2,3], [1,2,3], [1]) // [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
const liftN = _curry2((arity, fn) => {
  const lifted = curryN(arity, fn)
  return curryN(arity, (arg, ...rest) => _reduce(ap, map(lifted, arg), rest))
})
export default liftN
