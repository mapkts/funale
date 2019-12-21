import _curry2 from './internal/_curry2'

/**
 * Returns `true` if the first argument is less than the second argument; `false` otherwise.
 *
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { infixLt } from 'funale'
 *
 * infixLt(1, 2) // true
 * infixLt(2, 1) // false
 * infixLt(2, 2) // false
 * infixLt('a', 'b') // true
 * infixLt('b', 'a') // false
 * infixLt('b', 'b') // false
 */
const infixLt = _curry2((a, b) => a < b)
export default infixLt
