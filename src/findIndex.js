import _curry2 from './internal/_curry2'

/**
 * Returns the index of the first element in the list that matches the predicate, or
 * `-1` if no element matches.
 *
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} predicate
 * @param {Array} list
 * @return {Number} The index of the element found, or `-1`
 * @example
 *
 * import { findIndex } from 'funale'
 *
 * const xs = [123, 'abc', 'def']
 * const hasLengthN = n => x => x && x.length === n
 * const hasLength3 = hasLengthN(3)
 * const hasLength4 = hasLengthN(4)
 * findIndex(hasLength3)(xs) // 1
 * findIndex(hasLength4)(xs) // -1
 */
const findIndex = _curry2((pred, list) => {
  const len = list.length
  let idx = -1

  while (++idx < len) {
    if (pred(list[idx])) return idx
  }
  return -1
})
export default findIndex
