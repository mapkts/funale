import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'

/**
 * Returns the first element in the provided list that satisfies the predicate, or
 * `undefined` if no matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} predicate
 * @param {Array} list
 * @return {*} The element found, or `undefined` if no matches
 * @example
 *
 * import { find } from 'funale'
 *
 * const xs = [123, 'abc', 'def']
 * const hasLengthN = n => x => x && x.length === n
 * const hasLength3 = hasLengthN(3)
 * const hasLength4 = hasLengthN(4)
 * find(hasLength3)(xs) // 'abc'
 * find(hasLength4)(xs) // undefined
 */
const find = _curry2(_dispatch('find', (pred, list) => {
  const len = list.length
  let idx = -1

  while (++idx < len) {
    if (pred(list[idx])) return list[idx]
  }
}))
export default find
