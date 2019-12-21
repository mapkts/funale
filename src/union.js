import _curry2 from './internal/_curry2'
import _combine from './internal/_combine'
import uniq from './uniq'

/**
 * Combines two lists into a set composed of the elements of each list.
 *
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array} The first and second lists concatenated, with duplicates removed
 * @example
 *
 * import { union } from 'funale'
 *
 * union([1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
 */
const union = _curry2((as, bs) => uniq(_combine(as, bs)))
export default union
