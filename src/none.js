import _curry2 from './internal/_curry2'
import _complement from './internal/_complement'
import all from './all'

/**
 * Returns `true` if no elements of the list match the predicate, `false` otherwise.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} predicate
 * @param {Array} list
 * @return {Boolean}
 * @example
 *
 * import { all } from 'funale'
 *
 * const equals3 = x => x === 3
 * none(equals3, [1, 2, 3]) // false
 * none(equals3, [1, 1, 1]) // true
 */
const none = _curry2((fn, list) => {
  return all(_complement(fn), list)
})
export default none

