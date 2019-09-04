import _curry2 from './internal/_curry2'

/**
 * Returns a curried version of `Array.sort` method.
 * Please note that it returns a **copy** of the list rather than modifying the original.
 *
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function
 * @param {Array} list The list to sort
 * @return {Array} A new sorted array
 * @example
 *
 * import { sort } from 'funale'
 *
 * sort((a, b) => a - b, [2, 1, 4, 1, 3, 5]) // [1, 1, 2, 3, 4, 5]
 */
const sort = _curry2((comparator, list) => Array.prototype.slice.call(list, 0).sort(comparator))
export default sort
