import _curry1 from './internal/_curry1'
import _makeFlat from './internal/_makeFlat'

/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @sig [a] -> [b]
 * @param {Array} list
 * @return {Array} The flattened list
 * @example
 *
 * import { flatten } from 'funale'
 *
 * flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])
 * // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
const flatten = _curry1(_makeFlat(true))
export default flatten
