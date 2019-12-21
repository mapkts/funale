import _curry3 from './internal/_curry3'

/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements.
 *
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @example
 *
 * import { remove } from 'funale'
 *
 * remove(2, 3, [1, 2, 3, 4, 5, 6, 7]) // [1, 2, 6, 7]
 */
const remove = _curry3((start, count, list) => {
  const rv = Array.prototype.slice.call(list, 0)
  rv.splice(start, count)
  return rv
})
export default remove
