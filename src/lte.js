import _curry2 from './internal/_curry2'

/**
 * Returns `true` if the second argument is less than or equal to the first argument; `false` otherwise.
 *
 * @sig lte :: Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { lte } from 'funale'
 *
 * lte(1, 2) // false
 * lte(2, 1) // true
 * lte(2, 2) // true
 * lte('a', 'b') // false
 * lte('b', 'a') // true
 * lte('b', 'b') // true
 */
const lte = _curry2((a, b) => b <= a)
export default lte
