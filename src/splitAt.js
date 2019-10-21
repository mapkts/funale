import _curry2 from './internal/_curry2'
import slice from './slice'
import length from './length'

/**
 * Splits a given list or string at a given index.
 *
 * @sig Number -> [a] -> [[a], [a]]
 * @param {Number} index The index where the list is split
 * @param {Array|String} list The list to be split
 * @return {Array} The splited array
 * @example
 *
 *  import { splitAt } from 'funale'
 *
 *  splitAt(1, [1, 2, 3]) // [[1], [2, 3]]
 *  splitAt(5, 'hello world') // ['hello', ' world']
 *  splitAt(-3, 'foobar') // ['foo', 'bar']
 */
const splitAt = _curry2((idx, as) => {
  return [slice(0, idx, as), slice(idx, length(as), as)]
})
export default splitAt
