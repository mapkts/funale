import _curry1 from './internal/_curry1'
import liftN from './liftN'

/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the Apply spec.
 *
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift
 * @return {Function} The lifted function
 * @example
 *
 * import { lift } from 'funale'
 *
 * const madd3 = lift((a, b, c) => a + b + c)
 * madd3([1,2,3], [1,2,3], [1]) // [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 * const madd5 = lift((a, b, c, d, e) => a + b + c + d + e)
 * madd5([1,2], [3], [4, 5], [6], [7, 8]) // [21, 22, 22, 23, 22, 23, 23, 24]
 */
const lift = _curry1(fn => liftN(fn.length, fn))
export default lift
