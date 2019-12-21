import _curry2 from './internal/_curry2'
import _includes from './internal/_includes'
import uniq from './uniq'

/**
 * Finds the set of all elements in the first list but not in the second list.
 *
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array} The elements in `list1` that are not in `list2`
 * @example
 *
 * import { difference } from 'funale'
 *
 * difference([1, 2, 3, 4], [3, 4, 5, 6]) // [1, 2]
 * difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) // [{b: 2}]
 */
const difference = _curry2((oList, nList) => uniq(oList).filter(x => !_includes(x, nList)))
export default difference
