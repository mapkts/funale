import _curry2 from './internal/_curry2'
import _includes from './internal/_includes'
import _filter from './internal/_filter'
import uniq from './uniq'

/**
 * Combines two lists into a set composed of those elements common to both lists.
 *
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array} The list of elements found in both lists
 * @example
 *
 * import { intersetion } from 'funale'
 *
 * intersection([1, 2, 3, 4], [3, 4, 5, 6]) // [3, 4]
 */
const intersection = _curry2((list1, list2) => {
  return list1.length > list2.length ? uniq(_filter(x => _includes(x, list1), list2)) : uniq(_filter(x => _includes(x, list2), list1))
})
export default intersection
