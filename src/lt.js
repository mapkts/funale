import _curry2 from './internal/_curry2'

/**
 * Returns `true` if the second argument is less than the first argument; `false` otherwise.
 *
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { lt } from 'funale'
 *
 * lt(1, 2) // false
 * lt(2, 1) // true
 * lt(2, 2) // false
 * lt('a', 'b') // false
 * lt('b', 'a') // true
 * lt('b', 'b') // false
 */
const lt = _curry2((a, b) => b < a)
export default lt
