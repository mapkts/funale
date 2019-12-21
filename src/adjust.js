import _combine from './internal/_combine'
import _curry3 from './internal/_curry3'

/**
 * Applies a function to the value at the given index of an array, returning
 * a new copy of the array with the element at the given index replaced with
 * the result of the function application.
 *
 * @sig Number -> (a -> a) -> [a] -> [a]
 * @param {Number} index
 * @param {Function} fn The function to apply
 * @param {Array} list
 * @return {Array} A copy of the supplied list with the element at the given index adjusted
 * @example
 *
 * import { adjust, toUpper } from 'funale'
 *
 * adjust(1, toUpper, ['a', 'b', 'c']) // ['a', 'B', 'c']
 * adjust(-1, toUpper, ['a', 'b', 'c']) // ['a', 'b', 'C']
 */
const adjust = _curry3((idx, fn, list) => {
  if (idx >= list.length || idx < -list.length) return list
  const index = idx < 0 ? list.length + idx : idx
  const clone = _combine(list)
  clone[index] = fn(clone[index])
  return clone
})
export default adjust
