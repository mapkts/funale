import _curry3 from './internal/_curry3'
import _dispatch from './internal/_dispatch'

/**
 * Returns a portion of a given list or string selected from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third arugment, if present.
 *
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} fromIndex The start index (inclusive)
 * @param {Number} toIndex The end index (exclusive)
 * @param {*} list
 * @return {*} A portion of the given list
 * @example
 *
 * import { slice } from 'funale'
 *
 * slice(1, 3, ['a', 'b', 'c', 'd']) // ['b', 'c']
 * slice(1, Infinity, ['a', 'b', 'c', 'd']) // ['b', 'c', 'd']
 * slice(0, -1, ['a', 'b', 'c', 'd']) // ['a', 'b', 'c']
 * slice(-3, -1, ['a', 'b', 'c', 'd'] // ['b', 'c']
 */
const slice = _curry3(_dispatch('slice', (from, to, list) => {
  return Array.prototype.slice.call(list, from, to)
}))
export default slice
