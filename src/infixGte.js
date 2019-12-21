import _curry2 from './internal/_curry2'

/**
 * Returns `true` if the first argument is greater than or equal to the second argument; `false` otherwise.
 *
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { infixGte } from 'funale'
 *
 * infixGte(1, 2) // false
 * infixGte(2, 1) // true
 * infixGte(2, 2) // true
 * infixGte('a', 'b') // false
 * infixGte('b', 'a') // true
 * infixGte('b', 'b') // true
 */
const infixGte = _curry2((a, b) => a >= b)
export default infixGte
