import _curry2 from './internal/_curry2'
import equals from './equals'
import take from './take'

/**
 * Checks if a list starts with the provided sublist.
 *
 * @sig [a] -> [a] -> Boolean
 * @param {Array|String} list
 * @param {Array|String} list
 * @return {Boolean}
 * @example
 *
 * import { startsWith } from 'funale'
 *
 * startsWith(['a'], ['a', 'b', 'c']) // true
 * startsWith(['b'], ['a', 'b', 'c']) // false
 * startsWith('a', 'abc') // true
 * startsWith('b', 'abc') // false
 */
const startsWith = _curry2((prefix, as) => {
  return equals(take(prefix.length, as), prefix)
})
export default startsWith
