import _curry2 from './internal/_curry2'
import _combine from './internal/_combine'
import difference from './difference'

/**
 * Finds the set of all elements in the first or second list, but not both.
 *
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array} The elements in `list2` or `list2`, but not both.
 * @example
 *
 * import { symmetricDifference } from 'funale'
 *
 * symmetricDifference([1, 2, 3, 4], [3, 4, 5, 6]) // [1, 2, 5, 6]
 * symmetricDifference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) // [{b: 2}, {c: 3}]
 */
const symmetricDifference = _curry2((list1, list2) => _combine(difference(list1, list2), difference(list2, list1)))
export default symmetricDifference
