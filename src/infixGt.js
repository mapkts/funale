import _curry2 from './internal/_curry2'

/**
 * Returns `true` if the first argument is greater than the second argument; `false` otherwise.
 *
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { infixGt } from 'funale'
 *
 * infixGt(1, 2) // false
 * infixGt(2, 1) // true
 * infixGt(2, 2) // false
 * infixGt('a', 'b') // false
 * infixGt('b', 'a') // true
 * infixGt('b', 'b') // false
 */
const infixGt = _curry2((a, b) => a > b)
export default infixGt
