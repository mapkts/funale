import _curry2 from './internal/_curry2'

/**
 * Returns `true` if the second argument is greater than or equal to the first argument; `false` otherwise.
 *
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { gte } from 'funale'
 *
 * gte(1, 2) // true
 * gte(2, 1) // false
 * gte(2, 2) // true
 * gte('a', 'b') // true
 * gte('b', 'a') // false
 * gte('b', 'b') // true
 */
const gte = _curry2((a, b) => b >= a)
export default gte
