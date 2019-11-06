import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'

/**
 * Returns `true` if at least one of the elements of the list match the predicate, `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} predicate
 * @param {Array} list
 * @return {Boolean}
 * @example
 *
 * import { any } from 'funale'
 *
 * const equals3 = x => x === 3
 * any(equals3, [1, 2, 3]) // true
 * any(equals3, [1, 1, 1]) // false
 */
const any = _curry2(_dispatch('any', (fn, list) => {
  let idx = -1
  while (++idx < list.length) {
    if (fn(list[idx])) {
      return true
    }
  }
  return false
}))
export default any

