import _curry2 from './internal/_curry2'
import equals from './equals'
import take from './take'

/**
 * Checks if a list ends with the provided sublist.
 *
 * @sig [a] -> [a] -> Boolean
 * @param {Array|String} list
 * @param {Array|String} list
 * @return {Boolean}
 * @example
 *
 * import { endsWith } from 'funale'
 *
 * endsWith(['c'], ['a', 'b', 'c']) // true
 * endsWith(['b'], ['a', 'b', 'c']) // false
 * endsWith('c', 'abc') // true
 * endsWith('b', 'abc') // false
 */
const endsWith = _curry2((suffix, as) => {
  return equals(take(-suffix.length, as), suffix)
})
export default endsWith
