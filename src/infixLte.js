import _curry2 from './internal/_curry2'

/**
 * Returns `true` if the first argument is less than or equal to the second argument; `false` otherwise.
 *
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { infixLte } from 'funale'
 *
 * infixLte(1, 2) // true
 * infixLte(2, 1) // false
 * infixLte(2, 2) // true
 * infixLte('a', 'b') // true
 * infixLte('b', 'a') // false
 * infixLte('b', 'b') // true
 */
const infixLte = _curry2((a, b) => a <= b)
export default infixLte
