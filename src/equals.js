import _curry2 from './internal/_curry2'
import _equals from './internal/_equals'

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { equal } from 'funale'
 *
 * equal(1, 1) // true
 * equal(1, '1') // false
 * equal([1, 2, 3], [1, 2, 3]) // true
 *
 * const a = {}; a.v = a
 * const b = {}; b.v = b
 * equal(a, b) // true
 */
const equals = _curry2((a, b) => _equals(a, b, [], []))
export default equals
