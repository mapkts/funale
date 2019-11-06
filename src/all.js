import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'

/**
 * Returns `true` if all elements of the list match the predicate, `false` otherwise.
 *
 * Dispatches to the `all` method of the second argument, if present.
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} predicate
 * @param {Array} list
 * @return {Boolean}
 * @example
 *
 * import { all } from 'funale'
 *
 * const equals3 = x => x === 3
 * all(equals3, [3, 3, 3]) // true
 * all(equals3, [1, 1, 1]) // false
 */
const all = _curry2(_dispatch('all', (fn, list) => {
  let idx = -1
  while (++idx < list.length) {
    if (!fn(list[idx])) {
      return false
    }
  }
  return true
}))
export default all

